<div align="center">

# ✦ devxign.tech | Professional Freelance Design & Digital Agency ✦

**A high-performance, *Nothing*-inspired static portfolio for premium creative agencies.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Website-3bb371?style=for-the-badge&logo=github)](https://devxign.github.io/Landing-Page-Temp2/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](#)
[![Cloudflare Ready](https://img.shields.io/badge/Cloudflare_Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](#)

<br>
</div>

## 🪐 Overview

**devxign.tech** is a premium, fully responsive, lightweight static web experience designed to showcase freelance design, development, and brand promotions. Inspired by the Stark minimalist aesthetic of the "Nothing" brand, it leverages pure Vanilla HTML5, CSS3, and JavaScript to deliver instant loading speeds, perfect Core Web Vitals, and native accessibility.

---

## ⚡ Production Audit & Performance Optimizations

This codebase has been thoroughly audited and optimized to meet **enterprise-grade production standards** across SEO, performance, accessibility, and security:

### 1. 🔍 SEO & Structured Data
* **Complete Metadata Tagging:** Every single page features unique `<title>`, `<meta name="description">`, `<link rel="canonical">`, OpenGraph (`og:` tags), and Twitter Cards for premium indexing.
* **LocalBusiness JSON-LD Schema:** The homepage includes rich structured schema markup specifying geographic coordinates, operation hours, pricing ranges, and branding connections.
* **Crawlability Assets:** Built-in compliant `robots.txt` and `sitemap.xml` linking all search engines directly to active site segments.
* **Descriptive Alternative Text:** All visual assets have high-impact search-keyword alt attributes for Google Image SEO.

### 2. 🚀 Core Web Vitals & Loading Speed
* **LCP Preloading:** The main hero illustration (`home page icon.png`) is preloaded in the head of `index.html` to guarantee the fastest Largest Contentful Paint.
* **Native Lazy Loading:** All off-viewport image illustrations are tagged with native browser `loading="lazy"` to defer loading until required.
* **Layout Shift Protection (CLS):** Every `<img>` tag specifies explicit `width` and `height` attributes to prevent structural layout shifts during rendering.
* **Resource Hints:** Integrated `preconnect` and `dns-prefetch` directives for Google Fonts and FontAwesome networks.

### ♿ 3. Accessibility (a11y) & Responsiveness
* **Skip-to-Content Navigation:** Implemented accessible, keyboard-focused Skip Links (`.skip-link`) allowing screen reader users to skip headers.
* **Interactive Touch Targets:** Configured all button, floating, and tab items to meet WCAG AA requirements with a minimum `44x44px` clickable dimension.
* **Accessible Contact Form:** Fully integrated accessible text mappings (`aria-label`) on all form controls, selections, and textareas.

### 🛡️ 4. Security & Cloudflare Pages Configuration
* **Cloudflare Security Headers (`_headers`):** Implemented strict server headers enforcing:
  * `X-Frame-Options: DENY` (Anti-clickjacking protection)
  * `X-Content-Type-Options: nosniff` (Anti-MIME sniffing protection)
  * `Referrer-Policy: strict-origin-when-cross-origin` (Safe referrers)
  * `Permissions-Policy: camera=(), microphone=(), geolocation=()` (Strict hardware permissions)
* **Extension-less URL Routing (`_redirects`):** Configured clean, professional URL paths on Cloudflare Pages (e.g. routing `/contact` cleanly to `/contact.html`).

---

## 📂 Project Structure

```text
📁 Landing-Page-Temp2/
├── 📄 index.html                      # Landing page + Services + Promotions
├── 📄 contact.html                    # Inquiry form with auto-fill capabilities
├── 📄 services.html                   # Individual pricing lists
├── 📄 privacy.html                    # Privacy Policy page
├── 📄 terms.html                      # Terms & Conditions page
├── 🎨 styles.css                      # Styling tokens, variables, responsive logic
├── ⚙️ script.js                       # Theme toggle, tab controls, Google Sheets submission
├── 📄 _headers                        # Cloudflare security configuration
├── 📄 _redirects                      # Extensionless URL rewrites
├── 📄 robots.txt                      # Web crawler access controller
└── 📄 sitemap.xml                     # Search engine directory
```

---

## 🚀 Deployment Guide (Cloudflare Pages)

Deploying this highly-optimized static website to Cloudflare Pages is completely **free** and takes under 1 minute:

1. **Create a Cloudflare Account:** Go to [dash.cloudflare.com](https://dash.cloudflare.com/) and log in.
2. **Navigate to Pages:** Go to **Workers & Pages** > **Pages** > **Connect to Git** (or upload the project folder directly).
3. **Select Repository:** Select `Landing-Page-Temp2`.
4. **Configure Build Settings:**
   * **Framework preset:** `None` (Static site)
   * **Build command:** *Leave blank*
   * **Build output directory:** `/` (Root directory)
5. **Deploy:** Click **Save and Deploy**. Cloudflare will automatically parse your `_headers` and `_redirects` files!

---

## 🛠️ Local Development

To run or edit this project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/devxign/Landing-Page-Temp2.git
   ```
2. **Navigate to the directory:**
   ```bash
   cd Landing-Page-Temp2
   ```
3. **Run a lightweight local server:**
   ```bash
   npx serve .
   ```

---
<div align="center">
  <i>Optimized for speed. Designed for distinction.</i>
</div>
