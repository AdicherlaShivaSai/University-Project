# University Landing Pages + Lead Form + Backend APIs (Beginner-Friendly)

This project contains:

- **Two responsive landing pages** for two private universities (React + Tailwind).
- **Lead form** integrated with **Pipedream Webhook**.
- **Backend Node.js API** (Express) deployed separately (Render/Railway).
- **Modal with dynamic fees** loaded from backend (`/api/fees`).
- **Responsive design** for mobile & desktop.
- **Frontend deployed on Netlify/Vercel** with free SSL.

---

# 🔗 Live Project URLs

### 🟦 Frontend (Landing Pages)
https://university-project-sigma-tawny.vercel.app

### 🟩 Backend (API)
https://university-project-fzdu.onrender.com


# 📁 Project Structure

```
root/
│── client/ (React + Vite project)
│   ├── src/
│   │   ├── pages/
│   │   │   ├── University1.jsx
│   │   │   ├── University2.jsx
│   │   ├── components/
│   │   │   ├── LeadForm.jsx
│   │   │   ├── FeeModal.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   ├── public/
│   │   ├── fees.json
│   │   ├── brochure-uni1.pdf
│   │   ├── brochure-uni2.pdf
│── server/ (Node + Express)
    ├── server.js
    ├── data/
        ├── university1.json
        ├── university2.json
        ├── fees.json
```

---

# 🚀 1. FRONTEND SETUP (Vite + React)

## Install dependencies

Run inside the **client** folder:

```bash
npm install
```

---

# 🔧 Environment Variables (client `.env`)

Create a `.env` file in the **client root**:

```
VITE_PIPEDREAM_WEBHOOK_URL=your_pipedream_webhook_here
VITE_BACKEND_URL=https://localhost:5000
```

---

# ▶ Run client Locally

```bash
npm run dev
```

App runs at:

```
http://localhost:5173
```

---

# 🧪 Test Your Form

Submit form → Check data appears in Pipedream workflow.

---

# 💡 Fee Modal

Click **“Check Course-wise Fees”** → Modal opens → Fetches data from:

```
GET /api/fees
```

---

# 🚀 2. BACKEND SETUP (Node + Express)

Go to server folder:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Install nodemon (dev only):

```bash
npm install -D nodemon
```

---

# ▶ Run server Locally

```bash
npm run dev
```

server runs at:

```
http://localhost:5000
```

Test endpoints:

```
http://localhost:5000/api/university1
http://localhost:5000/api/university2
http://localhost:5000/api/fees
```

---

# 🌍 3. DEPLOY SERVER (Render Recommended)

### Steps:
1. Push server folder to GitHub  
2. Go to **Render.com → New Web Service**  
3. Connect repo  
4. Configure:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Deploy

Render gives a URL like:

```
https://university-backend.onrender.com
```

---

# 🌍 4. DEPLOY CLIENT (Netlify or Vercel)

### **For Netlify**
1. Push client to GitHub  
2. Click **New Site**  
3. Set:
   - Build command → `npm run build`
   - Publish directory → `dist`
4. Add env vars:
   - `VITE_PIPEDREAM_WEBHOOK_URL`
   - `VITE_BACKEND_URL`

Netlify automatically adds **HTTPS/SSL**.

---

# ✔ 5. API Endpoints Summary

| Endpoint | Method | Description |
|---------|--------|-------------|
| `/api/university1` | GET | University 1 details |
| `/api/university2` | GET | University 2 details |
| `/api/fees` | GET | Course-wise fees |

---

# 📌 6. Features Implemented

- ✔ Fully responsive pages  
- ✔ React Router navigation  
- ✔ Pipedream webhook integration  
- ✔ Dynamic Fee Modal  
- ✔ Backend JSON APIs  
- ✔ Beginner-friendly code  
- ✔ Deployed frontend + backend  
- ✔ Free SSL support  

---

# 🙋 How to Explain in Interview (Short Answer)

> “I built two responsive landing pages using React and Tailwind. The lead form submits data to Pipedream via a webhook, and the modal fetches fees from my backend API hosted on Render. The frontend is deployed on Netlify with SSL, and the backend exposes simple JSON API endpoints.”

---

# 🎉 Done!

Your project is 100% ready for deployment & submission.
