import { notFound } from 'next/navigation';
import React from 'react'

export default async function page({ params }: { params: Promise<{ id: number }>}) {
  const { id } = await params;
  if(id > 900) {
    notFound();
  }

  return (
    <div>
      this is products page with dynamic route product id: {id}
      <h1>Products</h1>
    </div>
  )
}