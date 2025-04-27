import React from 'react'

export default async function page({ params }: { params: Promise<{ slug: string[] }>}) {
  const { slug } = await params;
  return (
    <div>
      This is the docs page
      <h1>Docs</h1>
      <h2>{slug.join('/')}</h2>
    </div>
  )
}
