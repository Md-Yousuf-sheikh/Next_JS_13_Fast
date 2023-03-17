const Comments = ({ comments }) => {
  console.log('comments', comments)
  return (
    <div>
      {comments?.map((item) => (
        <div
          key={item?.id}
          className="py-4 px-5 bg-slate-400 my-2 mx-5 rounded-md"
        >
          <h1 className="text-white text-xl uppercase" >Comment body: </h1>
          <h1 className="text-white text-lg capitalize" >{item?.body} </h1>
        </div>
      ))}
    </div>
  )
}

export default Comments

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments')
  const data = await res.json()
  return {
    props: {
      comments: data,
    },
  }
}
