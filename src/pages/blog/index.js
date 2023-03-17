import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
export default function Blog() {
  return (
    <main>
      <Head>
        <title>Blog Page</title>
      </Head>
      <div>
        <h1>Hello world</h1>
        <Link href={'/'}>
          <h1>Home</h1>
        </Link>
        <Image src={'/animal.jpg'} width={600} height={650} />

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image
             src={'/animal.jpg'} width={600} height={650}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
