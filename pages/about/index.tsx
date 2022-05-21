import Footer from '../../components/Footer'
import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Pageheader from '../../components/PageHeader'
import React from 'react'

const About = () => {
    return (
        <div className={'items-center flex flex-col'}>
          <Head>
            <title>Bentility | About</title>
            <meta name="description" content="Bentil's Blog| Bentility" />
            <link rel="icon" href="/favicon.png" />
          </Head>
          <Navbar />
          <main className={`md:w-[80%] min-h-[40vh] `}>
          <Pageheader title='About Us' />
          </main>
    
          {/* Footer */}
          <Footer nav />
        </div>
      )
}

export default About