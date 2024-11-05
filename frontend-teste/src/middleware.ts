import { cookies } from 'next/headers';
import {NextRequest, NextResponse} from 'next/server';

export const TOKEN_KEY = 'token';

export async function middleware(request: NextRequest) {
    const cookie = await cookies()
    const token = cookie.get(TOKEN_KEY)

    const protectedRules = ['/info'];

    const isProtectedRule = protectedRules.includes(request.nextUrl.pathname);

    if(isProtectedRule && !token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/info/:path*'],
}