import UserManagementLayout from "@/features/users-management/layouts";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_authenticated/users-management")({
  component: UserManagementLayout,
});
