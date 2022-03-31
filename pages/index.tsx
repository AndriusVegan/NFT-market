import type { NextPage } from 'next'
import Head from 'next/head'
// import NFTDropPage from './nft/[id]'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>NFT Vegan Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> 
     </div>
  )
}

export default Home
