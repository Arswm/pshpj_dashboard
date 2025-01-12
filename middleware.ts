import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest) {

    // const authToken = request.cookies.get("authToken");
    //
    // if (!authToken) {
    //     return NextResponse.redirect(new URL("/auth/signin", request.url));
    // }

    return NextResponse.next();
}

export const config = {
    matcher: ["/"], // Matches all paths
};
