"use client";
import { createContext, useContext, useEffect } from "react";
import { useSession } from "next-auth/react";
import http_client from "@/app/api/client";
import { ContainerDetailsType } from "@/types/Container";
import { containerProblemPathAtom, useAtom } from "@dspcoder/jotai";
import { useToast } from "@dspcoder/ui/components/ui/use-toast";
import { useQuery } from "@tanstack/react-query";

interface ContainerContextType {
  containerUrl: string | null;
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
  const [containerUrl, setContainerUrl] = useAtom(containerProblemPathAtom);

  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: [`user-container-${session?.user?.email}`],
    queryFn: async () => {
      const response = await http_client.post("/api/create_container", null, {
        params: {
          username: session?.user?.name,
        },
      });
      const container_url = (await http_client.get("/api/get_container_url", {
        params: {
          username: session?.user?.name,
        },
      })) as string;
      if (container_url) setContainerUrl(container_url);
      return response as ContainerDetailsType;
    },
    enabled: false,
  });

  // const stopContainer = async () => {
  //   if (!containerDetails) return;
  //   try {
  //     await http_client.post("/api/container/stop-container/", null, {
  //       params: {
  //         container_name: containerDetails.container_name,
  //       },
  //     });
  //     setContainerDetails(null);
  //     console.log("Container Stopped");
  //   } catch (error) {
  //     console.error("Error while stopping container:", error);
  //   }
  // };

  useEffect(() => {
    if (status === "authenticated") {
      refetch();
    }
  }, [status, refetch]);

  // useEffect(() => {
  //   if (status === "unauthenticated") {
  //     stopContainer();
  //   }
  // }, [status]);

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
