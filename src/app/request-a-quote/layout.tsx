import React from "react";
import Nav from "./Nav";

export default function RequestAQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Nav />
      {children}
    </main>
  );
}
