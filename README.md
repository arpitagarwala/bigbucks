# BigBucks 💰
### India's Smartest Price Comparison & E-Commerce Aggregator

A beautiful, minimal, and fast price comparison platform that aggregates products from Amazon, Flipkart, Myntra, Meesho, Snapdeal, Nykaa, JioMart, and more.

---

## 🚀 Live Demo

Hosted on GitHub Pages: [https://arpitagarwala.github.io/Bigbucks](https://arpitagarwala.github.io/Bigbucks)

---

## ✨ Features

| Feature | Status |
|---|---|
| 🔍 Smart product search with autocomplete | ✅ Live |
| 🏠 Trending & personalized home feed | ✅ Live |
| 🔄 Price comparison across 8+ platforms | ✅ Live |
| 🏷️ Platform, Price, Rating, Delivery, Discount filters | ✅ Live |
| ↕️ 7 sorting options | ✅ Live |
| 🛒 Grid & List view toggle | ✅ Live |
| ❤️ Wishlist with localStorage | ✅ Live |
| 🕒 Recently viewed (cookies/localStorage) | ✅ Live |
| 📱 Fully responsive | ✅ Live |
| 🔴 Real-time prices from actual APIs | 🔧 Needs backend (see below) |

---

## 📁 Repository Structure

```
Bigbucks/
├── index.html          # Complete single-page app
├── README.md           # This file
└── api/                # (Future) Backend API handlers
    ├── search.js
    └── products.js
```

---

## 🏠 Hosting on GitHub Pages (Free)

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: BigBucks frontend"
git remote add origin https://github.com/YOUR_USERNAME/Bigbucks.git
git push -u origin main
```

### Step 2 — Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages**
2. Source: `Deploy from a branch`
3. Branch: `main` / `root`
4. Click **Save**
5. Your site is live at `https://YOUR_USERNAME.github.io/Bigbucks`

---

## 🔧 Scaling to a Real Aggregator

### Why GitHub Pages alone isn't enough for real data:
GitHub Pages only serves static files — it can't run server-side code needed to:
- Call Amazon/Flipkart APIs securely (API keys must stay server-side)
- Scrape product data in real-time
- Cache pricing data
- Handle user accounts

### Free Backend Options to Add:

#### Option 1 — Vercel (Recommended, Free tier)
```bash
npm install -g vercel
vercel deploy
```
Add `/api/search.js` as a serverless function.

#### Option 2 — Render (Free tier)
Deploy a Node.js/Python backend, connect to the frontend.

#### Option 3 — Railway (Hobby plan, $5/month)
Best for always-on scraping jobs.

---

## 🔌 Real Data Integration

### Replace the mock `PRODUCTS` array with real API calls:

```javascript
// In index.html, replace static PRODUCTS with:
async function fetchProducts(query) {
  const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
  return res.json();
}
```

### Backend API Sources:

| Platform | Method | Cost |
|---|---|---|
| **Amazon** | [Amazon Product Advertising API](https://affiliate-program.amazon.in/) | Free (affiliate) |
| **Flipkart** | [Flipkart Affiliate API](https://affiliate.flipkart.com/) | Free (affiliate) |
| **Myntra** | No official API — web scraping with Puppeteer | Free (check ToS) |
| **Meesho** | No official API — web scraping | Free (check ToS) |
| **All platforms** | [PriceAPI.com](https://priceapi.com) | Paid, $20/mo |
| **All platforms** | [Rainforest API](https://rainforestapi.com) | Paid, $50/mo |

### Sample Node.js backend (Vercel serverless):

```javascript
// api/search.js
import amazonPaapi from 'amazon-paapi';

export default async function handler(req, res) {
  const { q } = req.query;
  
  // Amazon
  const amazonResults = await amazonPaapi.SearchItems({
    Keywords: q,
    SearchIndex: 'All',
    // ... your credentials
  });

  // Flipkart  
  const flipkartRes = await fetch(
    `https://affiliate-api.flipkart.io/affiliate/search/json?query=${q}&resultCount=10`,
    { headers: { 'Fk-Affiliate-Token': process.env.FLIPKART_TOKEN } }
  );
  
  // Merge & return unified format
  res.json({ products: mergeResults(amazonResults, flipkartRes) });
}
```

---

## 🎨 Tech Stack

- **Frontend**: Vanilla HTML/CSS/JavaScript (zero dependencies)
- **Fonts**: Google Fonts (Outfit + DM Mono)
- **Storage**: localStorage for wishlist, recently viewed, search history
- **Hosting**: GitHub Pages (static) → Vercel/Render (with backend)

---

## 📋 Roadmap

- [ ] Real API integration (Amazon, Flipkart)
- [ ] User authentication (Supabase/Firebase)
- [ ] Price history charts
- [ ] Price drop alerts (email/push)
- [ ] Browser extension
- [ ] Mobile app (React Native)
- [ ] Cashback & coupon aggregation

---

## ⚠️ Legal Notes

When integrating real APIs:
1. Use **official affiliate APIs** where available
2. Web scraping may violate platform Terms of Service — always check
3. Cache prices responsibly (don't overload servers)
4. Display price update timestamps (already implemented!)

---

Made with ❤️ by Arpit Agarwala
