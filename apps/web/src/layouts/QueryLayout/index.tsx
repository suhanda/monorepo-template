import {
    DefaultError,
    QueryClient,
    QueryClientConfig,
    QueryClientProvider,
} from "@tanstack/react-query";
import { PropsWithChildren, useState } from "react";

// Create a client
const queryClientConfig: QueryClientConfig = {
    defaultOptions: {
        queries: {
            retry: (failureCount: number, error: DefaultError) => {
                if (error.message === "Unauthorized") {
                    return false;
                }
                return failureCount < 3;
            },
        },
    },
};

export function QueryLayout(props: PropsWithChildren<unknown>) {
    const [queryClient] = useState(() => new QueryClient(queryClientConfig));
    return (
        // Provide the client to your App
        <QueryClientProvider client={queryClient}>
            {props.children}
        </QueryClientProvider>
    );
}
