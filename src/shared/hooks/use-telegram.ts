"use client";

import { useMemo } from "react";

export function useTelegram() {
  return useMemo(() => {
    if (typeof window === "undefined" || !window.Telegram?.WebApp) {
      return null;
    }

    return window.Telegram.WebApp;
  }, []);
}
