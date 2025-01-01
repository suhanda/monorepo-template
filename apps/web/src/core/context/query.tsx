import {
  DefaultError,
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from "@tanstack/react-query";
import { PropsWithChildren } from "react";

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

export const queryClient = new QueryClient(queryClientConfig);

export function QueryProvider(props: PropsWithChildren<unknown>) {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
}
