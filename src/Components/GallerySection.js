import React, { useState } from 'react'
import { SmallCard } from './SmallCard'

export const GallerySection = () => {
    const [data] = useState([
        { image: "lahore.webp", title: "Lahore", description: "5.5 hour drive" },
        { image: "muree.webp", title: "Muree", description: "2.5 hour drive" },
        {
          image: "rawalpindi.webp",
          title: "Rawalpindi Cantt",
          description: "2 hour drive",
        },
        { image: "nathia.jpg", title: "Nathia Gali", description: "3 hour drive" },
        { image: "multan.webp", title: "Multan", description: "7.5 hour drive" },
        {
          image: "peshawar.webp",
          title: "Peshawar",
          description: "1.5 hour drive",
        },
        {
          image: "faisalabad.webp",
          title: "Faisalabad",
          description: "5 hour drive",
        },
        { image: "bhurban.webp", title: "Bhurban", description: "3 hour drive" },
      ]);
    
    
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 px-8 sm:px-16">
        {data.map(location=><SmallCard data={location}/>)}
    </div>
  )
}  
