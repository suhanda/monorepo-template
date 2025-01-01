import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: async ({ context }) => {
    if (context.authState.isAuthenticated) {
      throw redirect({
        to: "/dashboard",
      });
    }
    throw redirect({
      to: "/login",
    });
  },
});
