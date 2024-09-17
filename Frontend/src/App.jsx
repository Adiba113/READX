import React from 'react';
import Home from './home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import Courses from './courses/Courses';
import Signup from './components/Signup';
import { Toaster } from 'react-hot-toast';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import { useAuth } from './context/AuthProvider';
import CartPage from './components/CartPage';
import MyOrders from './components/MyOrders';
import BookDetails from './components/BookDetails'; // Import your BookDetails component

function App() {
  const [authUser] = useAuth();
  
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/myOrders" element={<MyOrders />} />
          <Route path="/book/:id" element={<BookDetails />} /> {/* Add this line for book details */}
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;