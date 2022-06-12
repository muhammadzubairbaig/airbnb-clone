import React, { useState } from 'react'
import { MediumCard } from './MediumCard'

export const LocationSection = () => {
    const [data] = useState([
        { image: "entireHome.webp", title: "Entire homes" },
        { image: "cabin.webp", title: "Cabins and cottages" },
        { image: "unique.webp", title: "Unique stays" },
        { image: "pets.webp", title: "Pets Welcome" },
        { image: "entireHome.webp", title: "Entire homes" },
        { image: "cabin.webp", title: "Cabins and cottages" },
        { image: "unique.webp", title: "Unique stays" },
        { image: "pets.webp", title: "Pets Welcome" },
    ]);


    return (
        <>
            <div className='mx-8 sm:mx-16 mt-7'>
                <h1 className="font-bold text-3xl">Live anywhere</h1>
            </div>
            <div className='flex overflow-scroll mx-8 sm:mx-16 scrollbar-hide'>
                {data.map(card => <MediumCard data={card} />)}
            </div></>
    )
}
