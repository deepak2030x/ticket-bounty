import { ThemeProvider as BaseThemeProvider } from "next-themes";

type ThemeProviderProps = Readonly<{
  children: React.ReactNode;
}>;

function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <BaseThemeProvider attribute="class" enableSystem defaultTheme="system">
      {children}
    </BaseThemeProvider>
  );
}

export { ThemeProvider };
