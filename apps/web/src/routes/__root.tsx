import { Outlet, createRootRoute } from "@tanstack/react-router";

import LazyMainLayout from "@/layouts/MainLayout";
import { QueryLayout } from "@/layouts/QueryLayout";

export const Route = createRootRoute({
    component: RootComponent,
});

function RootComponent() {
    return (
        <QueryLayout>
            <LazyMainLayout>
                <Outlet />
            </LazyMainLayout>
        </QueryLayout>
    );
}
