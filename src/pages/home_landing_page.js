
import Footer from '../components/Footer'
import React from 'react'
import Card from '../components/Card'
import Form from '../components/Form'
import Hero from '../components/Hero'
import Swiper from '../components/Slider'
import Navbar from '../components/Navbar'

function home_landing_page () {
    return (
        <>
            <Navbar isContainerTrue={true}/>
            <div className='container grid gap-y-5 grid-cols-12 '>
                <Hero />
                <Card />
                <Swiper />
                <Form />
            </div>
            <Footer />
        </>
    )
}

export default home_landing_page;