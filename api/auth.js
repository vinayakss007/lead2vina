export default function handler(req, res) {
  const PASSWORD = process.env.SITE_PASSWORD || 'vinayak@123';
  const COOKIE_NAME = 'cepl_auth';

  if (req.method === 'POST') {
    const { password } = req.body;
    if (password === PASSWORD) {
      // No HttpOnly — JS needs to read this cookie for auth check
      res.setHeader('Set-Cookie', `${COOKIE_NAME}=${PASSWORD}; Path=/; Max-Age=${60 * 60 * 24 * 7}; SameSite=Strict`);
      res.status(200).json({ ok: true });
    } else {
      res.status(401).json({ ok: false, error: 'Wrong password' });
    }
  } else {
    res.status(405).end();
  }
}
