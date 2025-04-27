import React from 'react'

export default async function page() {
	const response = await fetch('https://jsonplaceholder.typicode.com/albums')
	if (!response.ok) {
		throw new Error('Failed to fetch data');
	}

	const albums = await response.json();
	return (
		<div>
			<h1>Albums</h1>
			<ul>
				{albums.map((album: { id: number; title: string }) => (
					<li key={album.id}>{album.title} - test</li>
				))}
			</ul>
		</div>
	)
}
