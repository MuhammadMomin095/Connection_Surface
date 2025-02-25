"use client";

import { toast as sonnerToast } from "sonner";

interface ToastOptions {
  title?: string;
  description?: string;
  variant?: "success" | "error" | "info";
}

export function toast(message: string, options?: ToastOptions) {
  switch (options?.variant) {
    case "success":
      sonnerToast.success(message);
      break;
    case "error":
      sonnerToast.error(message);
      break;
    case "info":
      sonnerToast.info(message);
      break;
    default:
      sonnerToast(message);
  }
}

export function useToast() {
  return {
    toast,
    dismiss: () => {}, // Sonner automatically handles dismissing
  };
}
