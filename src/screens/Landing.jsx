import React, {useState} from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"

// Component
import Modal from "../components/Elements/Modal/Modal";


export default function Landing() {
  const [modalShow, setShowModal] = useState(false);
  return (
    <>
      <Modal show={modalShow}  showModal={()=>{setShowModal(false)}} />
      
      <TopNavbar />
      <Header showModal={()=>{setShowModal(true)}} />
      <Services showModal={()=>{setShowModal(true)}} />
      <Projects showModal={()=>{setShowModal(true)}} />
      <Blog />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}


