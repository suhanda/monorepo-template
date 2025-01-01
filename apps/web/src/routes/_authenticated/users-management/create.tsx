import { createFileRoute } from "@tanstack/react-router";
import UserCreateView from "@/features/users-management/views/user-create";

export const Route = createFileRoute("/_authenticated/users-management/create")(
  {
    component: RouteComponent,
  },
);

function RouteComponent() {
  return <UserCreateView />;
}
