import { createFileRoute } from "@tanstack/react-router";
import UserCreateView from "@/modules/users-management/views/user-create";

export const Route = createFileRoute("/users-management/create/")({
    component: RouteComponent,
});

function RouteComponent() {
    return <UserCreateView />;
}
