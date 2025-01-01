import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";

import MainLayoutLazy from "@/layouts/MainLayout";

import { NotFoundLazy } from "@/features/not-found";
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
    <MainLayoutLazy>
      <Outlet />
    </MainLayoutLazy>
  );
}
