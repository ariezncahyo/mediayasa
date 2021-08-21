import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  return(
    <ThemeProvider attribute="class">
      <Head>
        <title>Mediayasa Persada</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Nextjs starter with tailwind css"/>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
 