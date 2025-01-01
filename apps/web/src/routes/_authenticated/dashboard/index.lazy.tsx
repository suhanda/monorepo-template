import DashboardView from "@/features/dashboard/views";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_authenticated/dashboard/")({
  component: DashboardView,
});
