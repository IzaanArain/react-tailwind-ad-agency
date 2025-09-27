import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  return `${import.meta.env.VITE_APP_URL}${path}`;
}

/**
 * Capitalizes the first letter of a given string.
 *
 * @param str - The input string
 * @returns The string with the first letter capitalized
 */
export function capitalizeFirstLetter(str: string): string {
  if (!str) return str; // Handle empty string
  return str.charAt(0).toUpperCase() + str.slice(1);
}
