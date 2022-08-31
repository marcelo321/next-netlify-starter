import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>PoC by zonduu!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="PoC by zonduu!" />
        <p className="description">
          PoC by zonduu!</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
