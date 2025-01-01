import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";

import LazyMainLayout from "@/layouts/MainLayout";

import { NotFoundLazy } from "@/views/not-found";
import { QueryClient } from "@tanstack/react-query";
import { AuthState } from "@/core/entities/auth";

export interface MainRouterContext {
  queryClient: QueryClient;
  authState: AuthState;
}

export const Route = createRootRouteWithContext<MainRouterContext>()({
  component: RootComponent,
  notFoundComponent: NotFoundLazy,
});

function RootComponent() {
  return (
    <LazyMainLayout>
      <Outlet />
    </LazyMainLayout>
  );
}
