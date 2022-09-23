import React from 'react'
import '../../styles.css'

export default function ImageGallery({ children }) {
    return (
        <ul className="ImageGallery">
            {children}
        </ul>
    )
}
