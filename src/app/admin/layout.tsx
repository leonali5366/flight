import React from "react";
import Providers from "./Providers";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Providers>{children}</Providers>
    </main>
  );
}
