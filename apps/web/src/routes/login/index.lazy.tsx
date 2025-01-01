import { useAuth } from "@/core/context/auth";
import { LoginViewLazy } from "@/features/login";
import { createLazyFileRoute, redirect } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/login/")({
  component: RouteComponent,
});

function RouteComponent() {
  const auth = useAuth();
  if (auth.isAuthenticated) {
    throw redirect({
      to: "/dashboard",
    });
  }

  return <LoginViewLazy />;
}
