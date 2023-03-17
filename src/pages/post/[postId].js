import { useRouter } from 'next/router'

const PostDetails = ({ post }) => {
  const router = useRouter()

  const handelBack = () => {
    router.push('/post')
  }

  return (
    <div className="h-full bg-slate-400 rounded-2xl shadow-md py-10 px-4 m-10">
      <div className="h-1/2">
        <h1 className="text-2xl uppercase">{post?.title}</h1>
        <h1 className="text-lg w-2/3">{post?.body}</h1>
        <button onClick={handelBack} className="p-2 bg-red-500 rounded-md text-white mt-5"  >Back to post</button>
      </div>
    </div>
  )
}

export default PostDetails

export const getStaticProps = async (context) => {
  const { params } = context
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.postId}`
  )
  const data = await res.json()

  return {
    props: {
      post: data,
    },
  }
}
//
export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data = await res.json()

  const paths = data?.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}
