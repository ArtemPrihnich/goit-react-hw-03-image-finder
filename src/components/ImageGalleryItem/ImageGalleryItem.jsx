import React from 'react'

export default function ImageGalleryItem({ items }) {
    return (
        <>
            {items.map(({ id, webformatURL, tags }) => {
                return (
                    <li key={id}>
                        <img src={webformatURL} alt={tags} width='200' />
                    </li>
                )
            })}
        </>
    )
}

