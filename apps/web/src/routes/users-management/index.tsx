import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";

const UserListViewLazy = lazy(
  () => import("@/modules/users-management/views/user-list"),
);

export const Route = createFileRoute("/users-management/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <UserListViewLazy />;
}
