import React from 'react'
import { About } from '../About/About'
import { Contact, MainContacts } from '../Contact/Contact'
import { Header } from '../Header/Header'
import ScrollToTop from "react-scroll-to-top";
// import { ScrollTop } from 'react-window-scroll-top';
import { Footer } from '../Footer/Footer';
export const Home = () => {
    return (
        <section>
      
            <Header/>
            <About/>/
            <Contact/>
           
            <MainContacts/>
            <ScrollToTop smooth color="#6f00ff" />
            <Footer/>
        </section>
    )
}

/* <ScrollTop 
            delay={2} 
            placement="bottom" 
            size="80px"
            text="Scroll up" 
        />*/