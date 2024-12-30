import UserListView from "@/modules/users-management/views/user-list";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/users-management/")({
    component: RouteComponent,
});

function RouteComponent() {
    return <UserListView />;
}
