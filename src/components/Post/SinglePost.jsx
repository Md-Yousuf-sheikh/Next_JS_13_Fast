import Link from 'next/link'

export default function SinglePost(data) {
  const { title, body, id } = data?.data
  return (
    <div className="w-1/2  mx-auto my-5 p-4  bg-red-200 rounded-md shadow-md border-spacing-5 border-cyan-500 ">
      <h1 className="text-xl capitalize pb-3"> {title}</h1>
      <Link href={`post/${id}`} className={"p-2 bg-slate-500 mt-5 text-white rounded-md"} >See Details</Link>
    </div>
  )
}
