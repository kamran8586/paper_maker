
import React from 'react'
import Card from '../components/Card'
import Form from '../components/Form'
import Hero from '../components/Hero'
import Swiper from '../components/Slider'

function home_landing_page () {
    return (
        <>
            <div className='container grid gap-y-5 grid-cols-12 '>
                <Hero />
                <Card />
                <Swiper />
                <Form />
            </div>

        </>
    )
}

export default home_landing_page