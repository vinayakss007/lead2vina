export const config = {
  runtime: 'edge',
  matcher: '/(.*)',
};

export default async function middleware(request) {
  const url = new URL(request.url);
  const path = url.pathname;

  // Always allow login page and auth API
  if (path === '/login' || path === '/login.html' || path.startsWith('/api/')) {
    return fetch(request);
  }

  // Check cookie
  const cookie = request.headers.get('cookie') || '';
  const hasAuth = cookie.split(';').some(c => c.trim().startsWith('cepl_auth='));

  if (hasAuth) {
    return fetch(request);
  }

  // Not authenticated — redirect to login
  return Response.redirect(new URL('/login', request.url), 302);
}
