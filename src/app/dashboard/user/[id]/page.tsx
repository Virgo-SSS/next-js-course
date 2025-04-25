import React from 'react'

export default function page({ params }: { params: { id: string } }) {
    const { id } = params
  return (
    <div>user details page with id : {id}</div>
  )
}
