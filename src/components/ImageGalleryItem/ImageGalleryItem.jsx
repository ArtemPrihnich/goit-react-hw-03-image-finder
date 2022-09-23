import React from 'react'

export default function ImageGalleryItem({ items, openModal }) {
    return (
        <>
            {items.map(({ id, webformatURL, tags, largeImageURL }) => {
                return (
                    <li className='ImageGalleryItem' key={id} onClick={() => openModal({ largeImageURL, tags })}>
                        <img className='ImageGalleryItem-image' src={webformatURL} alt={tags} width='200' />
                    </li>
                )
            })}
        </>
    )
}

