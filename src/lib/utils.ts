import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date)
}

export function readingTime(html: string): string {
  const textOnly = html.replace(/<[^>]*>/g, " ").trim()
  const wordCount = textOnly.split(/\s+/).filter(Boolean).length
  const wordsPerMinute = 200
  const readingTimeMinutes = Math.max(1, Math.round(wordCount / wordsPerMinute))
  return `${readingTimeMinutes} min read`
}