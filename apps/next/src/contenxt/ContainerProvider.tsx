"use client";
import { createContext, useContext, useEffect, useState } from "react";
import type React from "react";

import { useSession } from "next-auth/react";
import http_client from "@/app/api/client";
import type { ContainerDetailsType } from "@/types/Container";
import { containerProblemPathAtom, useAtom } from "@dspcoder/jotai";
import { useToast } from "@dspcoder/ui/components/ui/use-toast";
import { useQuery } from "@tanstack/react-query";
import { cookieUtils } from "@/utils/cookies";

interface ContainerContextType {
  containerUrl: string | null;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

const ContainerContext = createContext<ContainerContextType | undefined>(
  undefined,
);

export const useContainer = () => {
  const context = useContext(ContainerContext);
  if (!context) {
    throw new Error("useContainer must be used within a ContainerProvider");
  }
  return context;
};

export default function ContainerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const [containerUrl, setContainerUrl] = useAtom(containerProblemPathAtom);
  const [hasInitialized, setHasInitialized] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const savedContainerUrl = cookieUtils.getContainerUrl();
    if (savedContainerUrl && !containerUrl) {
      setContainerUrl(savedContainerUrl);
    }
  }, [containerUrl, setContainerUrl]);

  useEffect(() => {
    if (status === "unauthenticated") {
      setContainerUrl(null);
      cookieUtils.removeContainerUrl();
      setHasInitialized(false);
    }
  }, [status, setContainerUrl]);

  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: [`user-container-${session?.user?.email}`],
    queryFn: async () => {
      try {
        const response = await http_client.get("/api/create_container", {
          params: {
            username: session?.user?.name,
          },
        });

        const container_url = (await http_client.get("/api/get_container_url", {
          params: {
            username: session?.user?.name,
          },
        })) as { url: string };

        if (container_url?.url) {
          setContainerUrl(container_url.url);
          cookieUtils.setContainerUrl(container_url.url);
        }

        return response as ContainerDetailsType;
      } catch (error) {
        console.error("Error fetching container:", error);
        toast({
          title: "Error",
          description: "Failed to initialize container. Please try again.",
          variant: "destructive",
        });
        throw error;
      }
    },
    enabled: false,
  });

  useEffect(() => {
    if (
      status === "authenticated" &&
      session?.user?.name &&
      !containerUrl &&
      !hasInitialized
    ) {
      setHasInitialized(true);
      refetch();
    }
  }, [status, session, containerUrl, refetch, hasInitialized]);

  return (
    <ContainerContext.Provider
      value={{
        containerUrl,
        isLoading,
        isError,
        isSuccess,
      }}
    >
      {children}
    </ContainerContext.Provider>
  );
}
