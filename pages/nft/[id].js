import React from 'react'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'

const NFTDropPage = () => {
  // Authentication
  const connectWithMetamask = useMetamask()
  const address = useAddress()
  const disconnect = useDisconnect()
  console.log('address')

  return (
    <div
      className="lg:grid-8 flex h-screen
    flex-col lg:grid lg:grid-cols-10"
    >
      {/* left container */}
      <div className="bg-gradient-to-br from-cyan-800  to-rose-500 lg:col-span-4 ">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2">
            <img
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
              src="http://links.papareact.com/8sg"
              alt="nft"
            />
          </div>
          <div className="space-y-2 p-5 text-center">
            <h1 className="text-4xl font-bold text-white"> Vegan Apes</h1>
            <h2 className="text-xl text-gray-300">
              Follow vegan lifestyle every day
            </h2>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        {/* header */}
        <header className="flex items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            {' '}
            <span className="font-extrabold underline decoration-pink-600/50">
              {' '}
              Vegan
            </span>{' '}
            NFT market place
          </h1>{' '}
          <button
            onClick={() => (address ? disconnect() : connectWithMetamask())}
            className="rounded-full bg-rose-400 px-4 py-2 text-xs font-bold text-white  lg:px-5 lg:py-3 lg:text-base"
          >
            {address ? 'Sign Out' : 'Sign In'}
          </button>
        </header>

        <hr className="my-2 border" />
        {address ? (
          <p className="text-center text-sm text-rose-400">
            You are logged in with wallet {address.substring(0, 5)}...
            {address.substring(address.length - 5)}
          </p>
        ) : (
          connectWithMetamask
        )}

        {/* Content */}
        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 lg:justify-center lg:space-y-0">
          <img
            className="w-80 object-cover pb-10 lg:h-40"
            src="https://links.papareact.com/bdy"
            alt=""
          />
          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            {' '}
            Vegan APE coding club
          </h1>
          <p className="text--xl pt-2 pb-2 text-green-500"> Claim your NFT</p>
          <button className="mt-10 h-16 w-full rounded-full bg-red-500 font-bold text-white">
            Mint Vegan NFT (0.2 ETH)
          </button>
        </div>
      </div>
    </div>
  )
}

export default NFTDropPage
