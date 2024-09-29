import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getUser } from './features/auth/api/get-user';
export async function middleware(request: NextRequest) {

    const user = await getUser()

    if (!user) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()

}
export const config = {
    matcher: ["/dashboard"],
};
