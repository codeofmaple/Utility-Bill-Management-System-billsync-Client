
# BillSync – Full-Stack Utility Bill Management System

## 🔗 Live Demo  
**Frontend Live App:** https://bills-sync.web.app  
**Backend Repository:** https://github.com/codeofmaple/utility-bill-management-system-billsync-server  

---

## 📌 Project Overview  
BillSync is a full-stack MERN-based utility bill management platform that enables users to view, filter, manage, and pay their monthly bills with ease. It includes secure Firebase authentication, real‑time bill handling, PDF report generation, user‑specific bill management, and a polished, animated UI built with modern React tools.

The system provides a structured bill‑tracking experience with authentication‑protected features and a powerful admin-ready backend API built with Express.js, Firebase Admin, and MongoDB.

---

## 🖼 Features at a Glance  
### 🔐 Authentication  
- Firebase Email/Password Login  
- Google Social Login  
- Protected Routes  
- Request-level token verification on backend  

### 📄 Bill Management  
- Browse all bills  
- Dynamic category filtering & searching  
- Recent bills section  
- Secure payment system  
- Add, update, delete personal paid bills  
- PDF report generation using jsPDF  
- Only current month bills can be paid  

### 🎨 User Experience & UI  
- Responsive, elegant UI  
- Dark/Light theme  
- GSAP, Framer Motion & Lottie animations  
- Toast notifications  
- Interactive hover effects  
- Loading animations  

### ⚙️ Backend Features  
- Firebase Admin token verification  
- MongoDB querying & filtering  
- CRUD operations for user bills  
- Category + text search API  
- Protected endpoints  

---

## 📁 Project Structure (Frontend + Backend)

```
/frontend
   ├── src/
   │   ├── components/
   │   ├── pages/
   │   ├── hooks/
   │   ├── context/
   │   └── utils/
   └── ...

/backend
   ├── index.js
   ├── bills-sync-firebase-admin-key.json
   ├── .env
   └── package.json
```

---

## 🛠 Tech Stack

### **Frontend**
| Technology | Purpose |
|-----------|----------|
| React 19 | UI Framework |
| React Router 7 | Routing |
| Tailwind CSS 4 | Styling |
| DaisyUI | UI Components |
| Framer Motion | Animation |
| GSAP | Advanced Animations |
| Lottie React | JSON animations |
| Axios | API communication |
| jsPDF + AutoTable | PDF reporting |
| React Toastify | Notifications |

---

### **Backend**
| Technology | Purpose |
|-----------|----------|
| Node.js | Runtime |
| Express.js | Server Framework |
| MongoDB + Mongoose | Database |
| Firebase Admin SDK | Token Verification |
| dotenv | Environment Config |
| CORS | Security |

---

## 📦 Dependencies (Frontend)

```json
"dependencies": {
  "@tailwindcss/vite": "^4.1.17",
  "axios": "^1.13.2",
  "daisyui": "^5.4.7",
  "firebase": "^12.5.0",
  "framer-motion": "^12.23.24",
  "gsap": "^3.13.0",
  "jspdf": "^3.0.3",
  "jspdf-autotable": "^5.0.2",
  "lottie-react": "^2.4.1",
  "react": "^19.1.1",
  "react-awesome-reveal": "^4.3.1",
  "react-data-grid": "^7.0.0-beta.58",
  "react-dom": "^19.1.1",
  "react-icons": "^5.5.0",
  "react-loader-spinner": "^8.0.0",
  "react-router": "^7.9.5",
  "react-simple-typewriter": "^5.0.1",
  "react-spinners": "^0.17.0",
  "react-toastify": "^11.0.5",
  "react-tooltip": "^5.30.0",
  "styled-components": "^6.1.19",
  "sweetalert2": "^11.26.3",
  "swiper": "^12.0.3",
  "tailwindcss": "^4.1.17"
}
```

---

## 📦 Backend Dependencies

```json
"dependencies": {
  "cors": "^2.8.5",
  "dotenv": "^16.4.5",
  "express": "^4.19.2",
  "firebase-admin": "^12.4.0",
  "mongodb": "^6.8.0"
}
```

---

## 🔗 Light API Documentation (Backend)

### **Public Routes**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Server check |
| GET | `/bills` | Get all bills |
| GET | `/filter?category=&search=` | Filter bills |
| GET | `/recent-bills` | Get latest 6 bills |

### **Protected Routes (Require Firebase Token)**  
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/bills/:id` | Get bill by ID |
| GET | `/my-bills?email=` | Get user’s bills |
| POST | `/my-bills` | Add bill to user list |
| PUT | `/my-bills/:id` | Update bill |
| DELETE | `/my-bills/:id` | Delete bill |

---

## 🧪 Local Development Setup  

### **1️⃣ Clone Repositories**
```
git clone https://github.com/codeofmaple/utility-bill-management-system-billsync-server
git clone <frontend-repo-link>
```

### **2️⃣ Setup Backend**
```
cd utility-bill-management-system-billsync-server
npm install
```

#### Create `.env` file:
```
PORT=3000
DB_USERNAME=yourMongoUser
DB_PASSWORD=yourMongoPassword
```

Run the server:
```
node index.js
```

---

### **3️⃣ Setup Frontend**
```
cd billsync-frontend
npm install
npm run dev
```

---

## ✨ Author  
**Md Nahid Ali**  
📧 Email: acc11nahid@gmail.com  
🐙 GitHub: https://github.com/codeofmaple  

---

## 📜 License  
This project is licensed under the **MIT License**.  
