import React from 'react'
import { Rings } from 'react-loader-spinner'
import '../../styles.css'

export default function Loader({ visible }) {
    return (
        <Rings
            height="200"
            width="200"
            color="#27e435"
            radius="6"
            wrapperStyle={{}}
            wrapperClass="Loader-style"
            visible={visible}
            ariaLabel="rings-loading"
        />
    )
}
