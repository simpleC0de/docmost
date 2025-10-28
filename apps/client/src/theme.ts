import {
  createTheme,
  CSSVariablesResolver,
  MantineColorsTuple,
} from "@mantine/core";

const blue: MantineColorsTuple = [
  "#e7f3ff",
  "#d0e4ff",
  "#a1c6fa",
  "#6ea6f6",
  "#458bf2",
  "#2b7af1",
  "#0b60d8",
  "#1b72f2",
  "#0056c1",
  "#004aac",
];

const red: MantineColorsTuple = [
  "#ffebeb",
  "#fad7d7",
  "#eeadad",
  "#e3807f",
  "#da5a59",
  "#d54241",
  "#d43535",
  "#bc2727",
  "#a82022",
  "#93151b",
];

const gray: MantineColorsTuple = [
  "#f5f5f5",
  "#e5e5e5",
  "#d4d4d4",
  "#a3a3a3",
  "#737373",
  "#525252",
  "#404040",
  "#262626",
  "#171717",
  "#0a0a0a",
];

const neutralGray: MantineColorsTuple = [
  "#f9fafb",
  "#f3f4f6",
  "#e5e7eb",
  "#d1d5db",
  "#9ca3af",
  "#6b7280",
  "#4b5563",
  "#374151",
  "#1f2937",
  "#111827",
];

const green: MantineColorsTuple = [
  "#d1fae5",
  "#a7f3d0",
  "#6ee7b7",
  "#34d399",
  "#10b981",
  "#059669",
  "#047857",
  "#065f46",
  "#064e3b",
  "#022c22",
];

export const theme = createTheme({
  colors: {
    blue,
    red,
    gray,
    neutralGray,
    green,
  },
  primaryColor: 'neutralGray',
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
  fontFamilyMonospace: 'JetBrains Mono, Fira Code, monospace',
  defaultRadius: 'md',
});

export const mantineCssResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    "--input-error-size": theme.fontSizes.sm,
    "--SWISSER-bg-primary": "#0a0a0a",
    "--SWISSER-bg-secondary": "#111111",
    "--SWISSER-bg-tertiary": "#1a1a1a",
    "--SWISSER-bg-card": "#161616",
    "--SWISSER-bg-elevated": "#1f1f1f",
    "--SWISSER-text-primary": "#ffffff",
    "--SWISSER-text-secondary": "#a0a0a0",
    "--SWISSER-text-tertiary": "#707070",
    "--SWISSER-text-muted": "#505050",
    "--SWISSER-accent-primary": "#6B7280",
    "--SWISSER-accent-hover": "#9CA3AF",
    "--SWISSER-gain": "#10B981",
    "--SWISSER-gain-bg": "rgba(16, 185, 129, 0.1)",
    "--SWISSER-gain-border": "rgba(16, 185, 129, 0.3)",
    "--SWISSER-loss": "#EF4444",
    "--SWISSER-loss-bg": "rgba(239, 68, 68, 0.1)",
    "--SWISSER-loss-border": "rgba(239, 68, 68, 0.3)",
    "--SWISSER-border-color": "rgba(255, 255, 255, 0.06)",
    "--SWISSER-border-hover": "rgba(255, 255, 255, 0.12)",
    "--SWISSER-shadow-sm": "0 2px 8px rgba(0, 0, 0, 0.4)",
    "--SWISSER-shadow-md": "0 4px 16px rgba(0, 0, 0, 0.5)",
    "--SWISSER-shadow-lg": "0 8px 32px rgba(0, 0, 0, 0.6)",
    "--SWISSER-space-xs": "4px",
    "--SWISSER-space-sm": "8px",
    "--SWISSER-space-md": "16px",
    "--SWISSER-space-lg": "24px",
    "--SWISSER-space-xl": "32px",
    "--SWISSER-space-2xl": "48px",
    "--SWISSER-radius-sm": "6px",
    "--SWISSER-radius-md": "8px",
    "--SWISSER-radius-lg": "12px",
    "--SWISSER-radius-xl": "16px",
    "--SWISSER-transition": "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "--SWISSER-transition-fast": "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  light: {},
  dark: {},
});
