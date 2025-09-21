"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group font-sans bg-transparent"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--font-family": "var(--font-sans), sans-serif",
        } as React.CSSProperties
      }
      toastOptions={{
        style: {
          fontFamily:
            "var(--font-sans, ui-sans-serif, system-ui, sans-serif)",
        },
        className: "font-sans",
      }}
      {...props}
    />
  );
};

export { Toaster };
