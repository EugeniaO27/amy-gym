import Benefits from '@/components/benefits/Benefits';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';
import Hero from '@/components/hero/Hero';
import Navbar from '@/components/navbar/Navbar'
import OurClasses from '@/components/ourClasses/OurClasses';

import React from 'react'

const Home = () => {
  return (
    <>
     <Navbar />  
     <main className='flow-root'>
       <section>
         <Hero />
         <Benefits />
         <OurClasses />
         <Contact />
       </section>
      </main>
      <Footer />
    </>
    
  )
}

export default Home;