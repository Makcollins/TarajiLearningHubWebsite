import { BrowserRouter, Route, Routes } from "react-router";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Infographics } from "./components/Infographics";
import { Contact } from "./pages/Contact";
import { Gallery } from "./pages/Gallery";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Blogs from "./pages/Blogs";
import BlogContent from './pages/BlogContent';

export default function App() {
  // return <RouterProvider router={router} />;
  return <>
  <BrowserRouter>
  <Navigation></Navigation>
  <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about-us/' element={<About />} />
      <Route path='/our-services/' element={<Services />} />
      <Route path='/our-impact/' element={<Infographics />} />
      <Route path='/contact/' element={<Contact />} />
      <Route path='/gallery/' element={<Gallery/>} />
      <Route path='/blogs' element={<Blogs/>} />
      <Route path='/blogs/:slug' element={<BlogContent/>} />
    </Routes>
    <Footer />
  </BrowserRouter>
  <FloatingWhatsApp 
        phoneNumber="254745461993" // Required: Include country code without '+' or zeros
        accountName="Taraji Learning Hub" 
        // allowClickOnEnter
        // rememberDelay
        avatar="/logo/taraji-golden.png"
        notification
        notificationSound
      />

  </>
}

