import { useRouter } from 'next/router'
import React from 'react'

function BlogId() {
  const router = useRouter()
  const id = router?.query?.blogId
  console.log('id', id)
  return (
    <div>
      <h1>This is a dynamic page of {id} </h1>
    </div>
  )
}

export default BlogId
