import { NextRequest as Request } from "next/server";
import { NextResponse as Response } from "next/server";

export function middleware(req: Request) {

    const token = req.cookies.get("token")?.value;

    const url = req.nextUrl.clone();


    if (url.pathname.startsWith("/dashboard") && !token) {
        url.pathname = "/auth";
        return Response.redirect(url);
    }

    if (url.pathname === "/") {
        url.pathname = token ? "/dashboard" : "/auth";
        return Response.redirect(url);

    }
    return Response.next();

    // Middleware logic can be added here in the future
}

export const config = {
    matcher: ["/", "/dashboard/:path*"], // run middleware only on / and /dashboard
};