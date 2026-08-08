import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // "admin" va excluido: esa ruta se reenvia al back office (rewrite en
  // next.config.ts) y no debe recibir prefijo de idioma de next-intl.
  matcher: ["/((?!api|admin|_next|_vercel|logo|og|.*\\..*).*)"],
};
