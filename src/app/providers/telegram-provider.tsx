"use client";

import { useEffect } from "react";

export function TelegramProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const initTelegram = async () => {
      if (typeof window === "undefined") return;
      if (!window.Telegram?.WebApp) return;

      const WebApp = (await import("@twa-dev/sdk")).default;

      WebApp.ready();
      WebApp.expand();
    };

    initTelegram();
  }, []);

  return children;
}
