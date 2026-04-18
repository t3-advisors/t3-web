import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware navigation helpers. Using `<Link>` from here instead of
// `next/link` guarantees the current locale is preserved on every internal
// navigation (e.g. clicking "Soy inversionista" from /es/... stays in /es).
// Using `<Link locale="en">...</Link>` in the locale switcher also writes the
// NEXT_LOCALE cookie so the user's explicit choice sticks.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
