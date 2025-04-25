import Link from 'next/link'
import React from 'react'

export default function user() {
  return (
    <div>
        <ul>
            <li>
                <Link href="/dashboard/user/1">User 1</Link>
            </li>
            <li>
                <Link href="/dashboard/user/2">User 2</Link>
            </li>
            <li>
                <Link href="/dashboard/user/3">User 3</Link>
            </li>
        </ul>
    </div>
  )
}
