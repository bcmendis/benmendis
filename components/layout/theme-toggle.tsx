"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/layout/icons"
import { Switch } from "../ui/switch"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Icons.sun className="text-muted-foreground rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Icons.moon className="text-muted-foreground absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export function ThemeToggleMobile() {
  const { setTheme, theme } = useTheme();

  return (
    <form className="container grid grid-cols-2 justify-evenly items-center text-muted-foreground">
      <div className="flex flex-1 justify-center">
        {theme === "dark" ? (
          <Icons.moon
            className={`h-8 w-8 ${
              theme === "dark" ? "text-accent" : "text-muted-foreground"
            }`}
          />
        ) : (
          <Icons.sun
            className={`h-8 w-8 ${
              theme === "dark" ? "text-accent" : "text-muted-foreground"
            }`}
          />
        )}
      </div>

      <div className="flex justify-end">
        <Switch
          id="darkMode"
          aria-label="darkMode"
          role="switch"
          onCheckedChange={() => setTheme(theme === "light" ? "dark" : "light")}
          checked={theme === "dark"}
          className="data-[state=checked]:bg-accent-foreground"
        />
      </div>
    </form>
  );
}