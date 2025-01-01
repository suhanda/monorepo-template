import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/users-management/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_authenticated/_users-management/user-management"!</div>;
}
