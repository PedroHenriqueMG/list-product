"use client";

import { TRPCReactProvider } from "@/trpc/react";
import { NextUIProvider } from "@nextui-org/system";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextUIProvider>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </NextUIProvider>
    </>
  );
}
