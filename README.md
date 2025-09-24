# Final_Project
# Educational Course Selling Website

This is a **frontend React project** for an online educational course selling platform.  
The main idea is to allow users to **browse courses**, **view details**, **register/login with JWT-based authentication**, and **access protected pages** like Dashboard and Profile.

##  Features

- **Routing & Protected Routes** (using React Router v6)
- **Authentication with JWT** (simulated with fakeAuth.js)
- **State Management with Context API**
- **Side Effects with `useEffect`** (fetching courses, token validation)
- **Forms & Validation** using **Formik + Yup**
- **At least 8 Pages:**
  - Home
  - Courses
  - Course Detail
  - Pricing
  - Blog
  - Login
  - Register
  - Dashboard (protected)
  - Profile (protected)
- **Performance Optimizations**
  - Lazy loading for routes
  - Memoized components
    
##  Tech Stack

- **React 18**
- **React Router DOM**
- **Formik + Yup** (form validation)
- **JWT Decode** (token parsing)
- **Context API**

##  Project Structure
src/
┣ api/
┃ ┗ fakeAuth.js
┣ components/
┃ ┣ CourseCard.jsx
┃ ┣ NavBar.jsx
┃ ┗ ProtectedRoute.jsx
┣ context/
┃ ┗ AuthContext.jsx
┣ pages/
┃ ┣ Home.jsx
┃ ┣ Courses.jsx
┃ ┣ CourseDetail.jsx
┃ ┣ Pricing.jsx
┃ ┣ Blog.jsx
┃ ┣ Login.jsx
┃ ┣ Register.jsx
┃ ┣ Dashboard.jsx
┃ ┗ Profile.jsx
┣ App.jsx
┣ index.js
┗ styles.css
