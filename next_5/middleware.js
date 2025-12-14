import { NextResponse } from 'next/server';

export function middleware(request) {
  const session = request.cookies.get('session');

  // Protege todas as rotas que começam com /dashboard
  if (!session && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Se já estiver logado e tentar acessar login, manda pro dashboard
  if (session && request.nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};