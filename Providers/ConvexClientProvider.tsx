"use client"
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn, useAuth} from '@clerk/nextjs';
import { ConvexReactClient } from 'convex/react';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import React from 'react';

type Props = {
    children: React.ReactNode;
}

const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL || " ";

const convex = new ConvexReactClient(CONVEX_URL);

const ConvexClientProvider = ({
    children
}: Props) => {
  return (
    <ClerkProvider>
        <SignedIn>
            <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                {children}
            </ConvexProviderWithClerk>
        </SignedIn>
        <SignedOut>
            <RedirectToSignIn />
        </SignedOut>
    </ClerkProvider>
  );
}

export default ConvexClientProvider;