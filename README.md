# BillSync - Utility Bill Management System

## Live Demo

**Live Application**: [https://bills-sync.web.app](https://bills-sync.web.app)

---

## Project Overview

BillSync is a comprehensive utility bill management system built with the MERN stack. It allows users to securely manage, track, and pay their utility bills (Electricity, Gas, Water, Internet) through an intuitive and beautifully animated interface. The application features robust authentication, real-time bill management, and professional PDF reporting.

---

## ✨ Features

### 🔐 **Authentication & Security**
- **Dual Login System**: Email/password & Google social authentication
- **Secure Sessions**: Firebase Auth with protected routes
- **Form Validation**: Real-time input validation with error handling

### 💳 **Bill Management**
- **Smart Payment System**: Pay current month bills securely
- **CRUD Operations**: Full Create, Read, Update, Delete functionality
- **PDF Export**: Generate comprehensive payment reports
- **Bill Filtering**: Category and search filters with backend optimization

### 🎨 **User Experience**
- **Dark/Light Theme**: Seamless theme switching
- **Smooth Animations**: GSAP, Framer Motion, and React Awesome Reveal
- **Responsive Design**: Flawless experience across all devices
- **Interactive UI**: Hover effects and loading states

### 🔧 **Advanced Features**
- **Real-time Search**: Dynamic bill search across multiple fields
- **Payment Analytics**: Visual spending insights
- **Toast Notifications**: Beautiful feedback for all actions
- **Error Handling**: Custom 404 and error pages

## Project Layout

### Navbar
- Before Login: Logo | Home | Bills | Login | Register  
- After Login: Logo | Home | Bills | My Pay Bills | Profile | Logout  

### Pages
1. Home Page
   - Banner Carousel (3+ slides)  
   - Category Cards: Electricity, Gas, Water, Internet  
   - Recent Bills (6 latest bills)  
   - 2 Extra meaningful sections (FAQ, User review)  

2. Authentication
   - Login Page: Email, Password, Google Login  
   - Register Page: Name, Email, Photo URL, Password  

3. Bills Page (Public)
   - 3-column grid layout  
   - Category filter and search (dynamic with backend query)  
   - “See Details” button for each bill  

4. Bill Details Page (Private)
   - Detailed bill information  
   - Pay Bill button (enabled only for current month bills)  
   - Modal form for payment details  

5. My Pay Bills Page (Private)
   - Table view of bills paid by the logged-in user  
   - Update/Delete buttons with modals  
   - Total bills and total amount displayed  
   - Download PDF report  

6. Additional Pages
   - Profile, About  

---


## 🛠️ Tech Stack

### **Frontend**
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.1.1 | UI Framework |
| React Router | 7.9.5 | Navigation |
| Tailwind CSS | 4.1.17 | Styling Framework |
| DaisyUI | 5.4.7 | Component Library |
| Framer Motion | 12.23.24 | Advanced Animations |
| React Awesome Reveal | 4.3.1 | Scroll Animations |
| GSAP | 3.13.0 | Professional Animations |

### **Authentication & UI**
| Technology | Version | Purpose |
|------------|---------|---------|
| Firebase Auth | 12.5.0 | User Authentication |
| React Icons | 5.5.0 | Icon Library |
| React Toastify | 11.0.5 | Notifications |
| SweetAlert2 | 11.26.3 | Beautiful Alerts |

### **Utilities & PDF**
| Technology | Version | Purpose |
|------------|---------|---------|
| Axios | 1.13.2 | HTTP Client |
| jsPDF | 3.0.3 | PDF Generation |
| jsPDF AutoTable | 5.0.2 | PDF Tables |
| Swiper | 12.0.3 | Carousel Components |

### **Animation & Styling**
| Technology | Version | Purpose |
|------------|---------|---------|
| Lottie React | 2.4.1 | JSON Animations |
| React Simple Typewriter | 5.0.1 | Typing Effects |
| React Tooltip | 5.30.0 | Interactive Tooltips |
| Styled Components | 6.1.19 | CSS-in-JS Styling |

### **Backend**
- **Runtime**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: Firebase Admin SDK
- **Hosting**: Vercel (Backend), Firebase (Frontend)

---

## Author

- Md Nahid Ali
- Email: acc11nahid@gmail.com
- GitHub: https://github.com/codeofmaple

---

## License

This project is open-source under the **MIT License**.
