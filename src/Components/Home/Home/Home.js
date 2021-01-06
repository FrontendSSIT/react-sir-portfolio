import React from 'react'
import { About } from '../About/About'
import { Contact } from '../Contact/Contact'
import { Header } from '../Header/Header'
import { NavBar } from '../NavBar/NavBar'

export const Home = () => {
    return (
        <section>
        <NavBar/>
            <Header/>
            <About/>/
            <Contact/>
        </section>
    )
}
