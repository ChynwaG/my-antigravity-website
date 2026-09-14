# Deployment Guide: Oracle of God Pharmacy

This guide outlines how to deploy the production build (`dist/`) of **Oracle of God Pharmacy** to live cloud hosting.

---

## 📦 Production Build Summary

- **Project Location:** `C:\Users\USER\.gemini\antigravity\scratch\oracle-of-god-pharmacy`
- **Output Directory:** `C:\Users\USER\.gemini\antigravity\scratch\oracle-of-god-pharmacy\dist`
- **SPA Rewrites Configured:** `vercel.json` included for single-page routing.

---

## 🚀 Option 1: Vercel (Recommended — Free & 1-Click)

### Method A: Via Command Line (Vercel CLI)
1. Open PowerShell in `C:\Users\USER\.gemini\antigravity\scratch\oracle-of-god-pharmacy`.
2. Run:
   ```bash
   npx vercel
   ```
3. Follow the prompts to log in (via GitHub, Email, or Google) and accept defaults.
4. For production deployment, run:
   ```bash
   npx vercel --prod
   ```

### Method B: Drag & Drop (No CLI Required)
1. Visit [https://vercel.com/new](https://vercel.com/new).
2. Log in or create a free Vercel account.
3. Drag and drop the `dist/` folder directly onto the page.
4. Your website will be live instantly with a free SSL certificate (e.g. `oracle-of-god-pharmacy.vercel.app`).

---

## ⚡ Option 2: Netlify (Drag & Drop)

1. Visit [https://app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `C:\Users\USER\.gemini\antigravity\scratch\oracle-of-god-pharmacy\dist` folder onto the browser page.
3. Netlify will generate a live URL in 5 seconds (e.g. `oracleofgodpharmacy.netlify.app`).

---

## 🔥 Option 3: Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npx -y firebase-tools login
   ```
2. Initialize Firebase in the project directory:
   ```bash
   npx -y firebase-tools init hosting
   ```
3. Specify `dist` as your public directory and `Yes` to configure as a single-page app.
4. Deploy:
   ```bash
   npx -y firebase-tools deploy
   ```

---

## 🌐 Custom Domain Setup (e.g. `www.oracleofgodpharmacy.com`)

Once deployed on Vercel, Netlify, or Firebase:
1. Go to **Project Settings → Domains**.
2. Enter your custom domain (purchased from Whogohost, Namecheap, GoDaddy, etc.).
3. Add the DNS `CNAME` or `A` record provided by the platform to your domain registrar.
4. Free SSL (HTTPS) certificate will be automatically issued.
