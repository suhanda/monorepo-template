import UserEditView from "@/features/users-management/views/user-edit";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_authenticated/users-management/$userId/edit",
)({
  component: UserEditView,
});
