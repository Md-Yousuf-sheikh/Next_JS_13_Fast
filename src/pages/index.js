import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main>
        <Head>
          <title>Home Page</title>
        </Head>
        <h1>Hello World Home page </h1>
        <Link href={'/blog'}>Go to blog page</Link>
      </main>
    </>
  )
}
