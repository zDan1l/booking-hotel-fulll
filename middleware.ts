import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";


const ProtectedRoutes = ["/myreservation", "/checkout", "/admin"];

export async function middleware(request: NextRequest) {
    const session = await auth();
    const IsLoggedIn = !!session?.user;
    const role = session?.user.role;
    const { pathname } = request.nextUrl;

    if(!IsLoggedIn && ProtectedRoutes.some((route) => pathname.startsWith(route))){
        return NextResponse.redirect(new URL("/signin", request.url));
    }

    if(IsLoggedIn && role !== "admin" && pathname.startsWith("/admin")){
        return NextResponse.redirect(new URL("/", request.url));
    }

    if(IsLoggedIn && pathname.startsWith("/signin")){
        return NextResponse.redirect(new URL("/", request.url));
    }
}

export const config = {
    // regex
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
}