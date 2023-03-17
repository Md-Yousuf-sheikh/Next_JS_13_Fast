import SinglePost from "@/components/Post/SinglePost"

const Post = (props) => {
  const { posts } = props
//   console.log(posts)
  return (
    <div className="h-full bg-red-100" >
      <h1 className="text-4xl font-montserrat font-semibold text-red-500 text-center py-5 ">All Posts</h1>
      {posts?.map((post, index) =><SinglePost data={post} key={index} />)}
    </div>
  )
}

export default Post

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return {
    props: {
      posts: data,
    },
  }
}
