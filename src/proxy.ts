import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export default async function proxy(request: NextRequest) {
  const token = await getToken({ 
    req: request,
    secret: process.env.NEXTAUTH_SECRET
  });
  
  const path = request.nextUrl.pathname;

  // Define public paths that don't require authentication
  const publicPaths = [
    '/',
    '/products',
    '/categories',
    '/api/auth',
    '/_next',
    '/static',
    '/favicon.ico'
  ];

  // Check if path is public
  if (publicPaths.some(p => path.startsWith(p))) {
    return NextResponse.next();
  }

  // Auth routes handling
  if (path.startsWith('/auth/')) {
    if (token) {
      // If user is already logged in, redirect to home
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  }

  // Protected routes
  const protectedPaths = [
    '/cart',
    '/checkout',
    '/profile',
    '/orders'
  ];

  // Check if current path is protected
  if (protectedPaths.some(p => path.startsWith(p))) {
    if (!token) {
      // Save the attempted URL to redirect back after login
      const loginUrl = new URL('/auth/login', request.url);
      loginUrl.searchParams.set('redirect', path);
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }

  // Admin only routes
  if (path.startsWith('/admin')) {
    if (!token || token.role !== 'admin') {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  }

  // Allow all other routes
  return NextResponse.next();
}

// Update matcher to include all relevant paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (Next Auth API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api/auth|_next/static|_next/image|favicon.ico).*)',
    '/auth/:path*',
    '/cart/:path*',
    '/checkout/:path*',
    '/profile/:path*',
    '/orders/:path*',
    '/admin/:path*'
  ],
};