import UserDetailComponent from "@/modules/users-management/views/user-detail";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/users-management/$userId/")({
    component: RouteComponent,
});

function RouteComponent() {
    const userId = Route.useParams().userId;
    return <UserDetailComponent userId={userId} />;
}
