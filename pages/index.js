import Head from 'next/head'
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
import { useState, useEffect } from 'react'

export default function Home({ data }) {


  const [json, setJson] = useState(data.sort((a, b) => a.price - b.price));

  const [filter, setFilter] = useState({
    price: "lowest",
    size: "ALL"
  })

  const [cardlist, setCardlist] = useState([])

  const [mode, setMode] = useState({
    show: false
  })


  const [show, setShow] = useState({
    show: false
  })

  let showModal = () => {
    setShow({
      show: true
    })
  }

  let hideModal = () => {
    setShow({
      show: false
    })
  }


  const [dataModal, setDataModal] = useState({
    url: "",
    id: "",
    title: "",
    des: "",
    price: "",
    sizes: []
  })



  useEffect(() => {

    let arr = [];

    label: for (let i = 0; i < data.length; i++) {
      for (let h = 0; h < data[i].size.length; h++) {
        if (data[i].size[h] === filter.size) {
          arr.push(data[i]);
          continue label;
        }
      }
    }


    if (filter.price === "lowest") {
      setJson(arr.sort((a, b) => a.price - b.price));
    }
    else {
      setJson(arr.sort((a, b) => b.price - a.price));
    }

  }, [filter])



  return (
    <>

      <Head>

        <title>next js</title>

      </Head>


      {
        show.show && < Modals show={showModal} hide={hideModal} datamodal={dataModal} cardlist={cardlist} setCardlist={setCardlist} />
      }

      <Header />

      <div className={styles.main}>
        <div className={styles.left}>

          <Navbar filter={filter} setfilter={setFilter} len={json.length} />
          <div className={styles.card_section}>
            {
              json.map((item, index) => (
                <Card key={item.id} id={item.id} url={item.url} description={item.description} price={item.price} cardlist={cardlist} setCardlist={setCardlist} show={showModal} hide={hideModal} datamodal={dataModal} setdatamodal={setDataModal} />
              ))
            }
          </div>
        </div>

        <div className={styles.right}>
          <Menubar cardlist={cardlist} />
          {
            cardlist.map((item) => (
              <Cardlist key={item.id} id={item.id} url={item.url} description={item.description} price={item.price} count={item.count} cardlist={cardlist} setCardlist={setCardlist} />
            ))
          }
          {
            cardlist.length !== 0 && < Pay cardlist={cardlist} mode={mode} setmode={setMode} />
          }

          {
            cardlist.length !== 0 && mode.show && <Form />
          }


        </div>
      </div>



      <Footer />

    </>
  )
}


export async function getStaticProps() {

  const data = await (await fetch("http://localhost:3000/api/hello")).json();

  return {
    props: {
      data,
    }
  }

}