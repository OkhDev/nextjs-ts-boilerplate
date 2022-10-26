import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Webpage Title" description="A short description here." />

      <Hero />
    </>
  )
}

export default Home
