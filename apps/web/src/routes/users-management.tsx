import UserManagementLayout from "@/modules/users-management/layouts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/users-management")({
    component: RouteComponent,
});

function RouteComponent() {
    return <UserManagementLayout />;
}
