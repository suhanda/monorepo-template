import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  component: RouteComponent,
  beforeLoad: ({ location, context: { authState } }) => {
    if (!authState.isAuthenticated) {
      throw redirect({
        to: "/login",
        search: {
          ld: location.pathname,
        },
      });
    }
  },
});

function RouteComponent() {
  return <Outlet />;
}
