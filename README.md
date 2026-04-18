# CEPL Leads Dashboard

A password-protected leads dashboard connected to Google Sheets.

## Deploy to Vercel (3 steps)

### Step 1 — Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2 — Deploy
```bash
cd cepl-leads
vercel
```
Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Pick your account
- Link to existing project? **N**
- Project name: `cepl-leads` (or anything)
- Directory: `.` (current)

### Step 3 — Set your password
In the Vercel dashboard → your project → **Settings → Environment Variables**:

| Name | Value |
|------|-------|
| `SITE_PASSWORD` | `your-secret-password` |

Then redeploy: `vercel --prod`

---

## Change Password
Just update the `SITE_PASSWORD` environment variable in Vercel dashboard and redeploy.

## Default password (before setting env var)
`cepl2026`

## Files
- `index.html` — Main dashboard
- `login.html` — Login page
- `api/auth.js` — Password check API
- `middleware.js` — Route protection
- `vercel.json` — Vercel config
