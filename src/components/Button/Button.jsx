import React from 'react'
import '../../styles.css'

export default function Button({ onClick }) {
    return (
        <div>
            <button type='button' className='Button' onClick={() => onClick()}>Load more...</button>
        </div>
    )
}
