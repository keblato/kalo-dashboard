import createIntlMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { withAuth } from "next-auth/middleware";
const locales = ["en", "es"];
const publicPages = ["/", "/auth/"];

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
const intlMiddleware = createIntlMiddleware({
  locales,
  localePrefix: "as-needed",
  defaultLocale: "en",
});

const authMiddleware = withAuth(
  // Note that this callback is only invoked if
  // the `authorized` callback has returned `true`
  // and not for pages listed in `pages`.
  function onSuccess(req) {
    return intlMiddleware(req);
  },
  {
    callbacks: {
      authorized: ({ token }) => token != null,
    },
    pages: {
      signIn: "/auth/login",
    },
  }
);

export default function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${publicPages
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i"
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);
  console.log(isPublicPage);
  if (isPublicPage || true) {
    return intlMiddleware(req);
  } else {
    return (authMiddleware as any)(req);
  }
}
