import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export const useAuth = () => {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";
  const isLoading = status === "loading";

  if (status === "unauthenticated") {
    redirect("/(auth)/login");
  }

  return {
    session,
    isAuthenticated,
    isLoading,
    user: session?.user
  };
};