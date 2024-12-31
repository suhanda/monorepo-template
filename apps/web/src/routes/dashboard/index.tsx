import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";

const DashboardViewLazy = lazy(() => import("@/modules/dashboard/views"));

export const Route = createFileRoute("/dashboard/")({
  component: DashboardComponent,
});

function DashboardComponent() {
  return <DashboardViewLazy />;
}
