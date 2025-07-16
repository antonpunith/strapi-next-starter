// app/providers/ApolloWrapper.tsx
'use client';

import { ApolloProvider } from '@apollo/client';
import client from '@/lib/strapi/apollo'; // adjust if your lib is elsewhere

export function ApolloWrapper({ children }: { children: React.ReactNode }) {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
