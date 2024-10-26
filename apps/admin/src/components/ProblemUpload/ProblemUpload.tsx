"use client";

import { useState } from "react";
import { Label } from "@dspcoder/ui/components/ui/label";
import { Input } from "@dspcoder/ui/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@dspcoder/ui/components/ui/select";
import { Button } from "@dspcoder/ui/components/ui/button";
import { Progress } from "@dspcoder/ui/components/ui/progress";
import { Textarea } from "@dspcoder/ui/components/ui/textarea";
import { BlobServiceClient } from "@azure/storage-blob";

// Define the shape of the form data
interface FormData {
  title: string;
  description: string;
  difficulty: string;
  type: string;
  tags: string;
  companies: string;
}

const sasToken =
  "sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2024-10-24T07:20:05Z&st=2024-10-23T23:20:05Z&spr=https&sig=ebVZ1ufxjDh4eQ5qdD2RcSBEBw%2BN8XS7hXQ7oQkTp30%3D";
const storageAccountName = "dspcoderproblem";

export default function ProblemUpload() {
  const [step, setStep] = useState<number>(1);
  const [folderPath, setFolderPath] = useState<string>("");
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    difficulty: "",
    type: "dsa",
    tags: "",
    companies: "",
  });

  const handleFolderUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setUploading(true);
      setUploadProgress(0);

      try {
        const blobServiceClient = new BlobServiceClient(
          `https://${storageAccountName}.blob.core.windows.net/${sasToken}`
        );
        const containerClient =
          blobServiceClient.getContainerClient("problem-bucket");

        let totalSize = 0;
        let uploadedSize = 0;
        for (const file of files) {
          totalSize += file.size;
        }

        for (const file of files) {
          const blobName = file.webkitRelativePath;
          const blockBlobClient = containerClient.getBlockBlobClient(blobName);

          await blockBlobClient.uploadData(await file.arrayBuffer(), {
            onProgress: (ev) => {
              uploadedSize += ev.loadedBytes;
              const totalProgress = (uploadedSize / totalSize) * 100;
              setUploadProgress(Math.round(totalProgress));
            },
          });
        }

        setFolderPath(
          `${containerClient.url}/${files[0].webkitRelativePath.split("/")[0]}`
        );
        setStep(2);
      } catch (error) {
        console.error("Error uploading to Azure Blob Storage:", error);
        alert("An error occurred while uploading. Please try again.");
      } finally {
        setUploading(false);
      }
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const problemData = { ...formData, folder_path: folderPath };

    try {
      const response = await fetch("/api/problems", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(problemData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit problem data");
      }

      alert("Problem uploaded successfully!");
    } catch (error) {
      console.error("Error submitting problem data:", error);
      alert(
        "An error occurred while submitting the problem. Please try again."
      );
    }
  };

  return (
    <div className="w-full bg-background min-h-screen p-4 flex flex-col items-center">
      {step === 1 ? (
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">Upload Problem Folder</h1>
          <Input
            type="file"
            onChange={handleFolderUpload}
            webkitdirectory="true"
            directory="true"
            multiple
            disabled={uploading}
          />
          {uploading && (
            <div className="mt-4">
              <Progress value={uploadProgress} className="w-full" />
              <p className="mt-2">Uploading... {uploadProgress}%</p>
            </div>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          <h1 className="text-2xl font-bold mb-4">Problem Details</h1>

          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="difficulty">Difficulty</Label>
            <Select
              name="difficulty"
              onValueChange={(value) => handleSelectChange("difficulty", value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="type">Type</Label>
            <Select
              name="type"
              onValueChange={(value) => handleSelectChange("type", value)}
              defaultValue="dsa"
              required
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dsa">DSA</SelectItem>
                <SelectItem value="embedded">Embedded</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="tags">Tags (comma-separated)</Label>
            <Input
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <Label htmlFor="companies">Companies (comma-separated)</Label>
            <Input
              id="companies"
              name="companies"
              value={formData.companies}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <Label htmlFor="folder_path">Folder Path</Label>
            <Input id="folder_path" value={folderPath} readOnly />
          </div>

          <Button type="submit">Submit</Button>
        </form>
      )}
    </div>
  );
}
