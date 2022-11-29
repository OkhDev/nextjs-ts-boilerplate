import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="" />
      </Head>

      <Hero />
    </>
  )
}

export default Home
