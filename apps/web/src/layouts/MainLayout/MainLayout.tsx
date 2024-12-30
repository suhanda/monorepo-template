import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Link } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { PropsWithChildren } from "react";

export default function MainLayout(props: PropsWithChildren<unknown>) {
    return (
        <>
            <div className="p-2 flex gap-2 text-lg">
                <Link
                    to="/"
                    activeProps={{
                        className: "font-bold",
                    }}
                    activeOptions={{ exact: true }}
                >
                    Home
                </Link>
            </div>
            <hr />
            {props.children}
            <TanStackRouterDevtools position="bottom-right" />
            <ReactQueryDevtools
                initialIsOpen={false}
                buttonPosition="bottom-left"
            />
        </>
    );
}
