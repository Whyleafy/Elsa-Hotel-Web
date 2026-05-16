export interface TelegramWebApp {
  ready(): void;
  expand(): void;

  showAlert(message: string): void;

  initDataUnsafe: {
    user?: {
      id: number;
      first_name: string;
      username?: string;
    };
  };

  colorScheme: "light" | "dark";
}

declare global {
  interface Window {
    Telegram: {
      WebApp: TelegramWebApp;
    };
  }
}

export {};
