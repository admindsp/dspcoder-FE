"use client";
import { createContext, useContext, useEffect } from "react";
import { useSession } from "next-auth/react";
import http_client from "@/app/api/client";
import { ContainerDetailsType } from "@/types/Container";
import { containerDetailsAtom, useAtom } from "@dspcoder/jotai";
import { useToast } from "@dspcoder/ui/components/ui/use-toast";
import { useQuery } from "@tanstack/react-query";

interface ContainerContextType {
  containerDetails: ContainerDetailsType | null;
  deleteContainer: () => void;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

const ContainerContext = createContext<ContainerContextType | undefined>(
  undefined
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
  const [containerDetails, setContainerDetails] = useAtom(containerDetailsAtom);
  const { toast } = useToast();

  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: [
      `user_name:${session?.user?.name}-email:${session?.user?.email}-img:${session?.user?.image}`,
    ],
    queryFn: async () => {
      const requestBody = {
        user_name: session?.user?.name,
        container_name: session?.user?.name,
      };
      const response = await http_client.post(
        "/api/container/create-container/",
        {
          ...requestBody,
        }
      );
      setContainerDetails(response);
      console.log("Container created:", response);
      return response as ContainerDetailsType;
    },
    enabled: status === "authenticated",
  });

  const stopContainer = async () => {
    try {
      const resp = await http_client.post(
        "/api/container/stop-container/",
        null,
        {
          params: {
            container_name: containerDetails?.container_name,
          },
        }
      );
      setContainerDetails(null);
      console.log("Container Stopped");
    } catch (error) {
      console.error("Error while stopping container:", error);
    }
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      stopContainer();
    }
  }, [status]);

  return (
    <ContainerContext.Provider
      value={{
        containerDetails,
        isLoading,
        isError,
        isSuccess,
      }}
    >
      {children}
    </ContainerContext.Provider>
  );
}
