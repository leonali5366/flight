import React from "react";
import Providers from "./Providers";
import { ClerkProvider } from "@clerk/nextjs";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <main>
        <Providers>{children}</Providers>
      </main>
    </ClerkProvider>
  );
}
