import DashboardView from "@/modules/dashboard/views";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/")({
    component: DashboardComponent,
});

function DashboardComponent() {
    return <DashboardView />;
}
