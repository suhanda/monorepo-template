import UserDetailComponent from "@/features/users-management/views/user-detail";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_authenticated/users-management/$userId",
)({
  component: UserDetailComponent,
});
