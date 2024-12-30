import UserEditView from "@/modules/users-management/views/user-edit";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/users-management/$userId/edit")({
    component: RouteComponent,
});

function RouteComponent() {
    const userId = Route.useParams().userId;
    return <UserEditView userId={userId} />;
}
