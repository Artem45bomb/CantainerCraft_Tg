"use client";
import { FC, ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/features/i18n/i18n.mjs";

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <SessionProvider>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </SessionProvider>
  );
};
