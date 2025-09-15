import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import AboutPage from './pages/AboutPage'; // ✅ Create this file
import Services from './Components/Services/Services';
import ContactSection from './Components/contactsection/ContactSection';
import BookingPage from './pages/BookingPage';
import Gallary from './pages/Gallary';

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",  // ✅ New Route
    element: <AboutPage />,
  },
  {
    path: "/Service",  // ✅ New Route
    element: <Services/>
  },
  {
    path: "/contact",  // ✅ New Route
    element: <ContactSection/>
  },
  {
    path: "/booking",  // ✅ New Route
    element: <BookingPage/>
  },
   {
    path: "/gallary",  // ✅ New Route
    element: <Gallary/>
  },

]);

export default AppRouter;
