import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { id } = useParams()
    return (
        <>
            <div className='w-full bg-zinc-300 shadow-xl'>
                <div className='w-fit m-auto pt-5 pb-5 text-xl font-bold '>User: {id}</div>
            </div>
        </>
    )
}

export default User