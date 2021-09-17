import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Header } from '../components/Header/Header.jsx'
import { Footer } from '../components/Footer/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import { Card } from '../components/Card/Card'
import { Menubar } from '../components/Menubar/Menubar'
import { Cardlist } from '../components/Cardlist/Cardlist'
import { Pay } from '../components/Pay/Pay'
import { Form } from '../components/Form/Form'
import { Modals } from '../components/Modals/Modals'
import data from '../data'
import { useState, useEffect } from 'react'

export default function Home() {
  return (
    <>

      <Head>
        <title>next js</title>
        <meta name="description" content="this is next js project" />
        <meta name="keywords" content="nextjs" />
      </Head>

      hossein heydari

    </>
  )
}
