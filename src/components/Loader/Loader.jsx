import React from 'react'
import { Rings } from 'react-loader-spinner'
import '../../styles.css'

export default function Loader({ visible }) {
    return (
        <Rings
            height="80"
            width="80"
            color="#4fa94d"
            radius="6"
            wrapperStyle={{}}
            wrapperClass="Loader-style"
            visible={visible}
            ariaLabel="rings-loading"
        />
    )
}
