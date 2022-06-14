import React from 'react'
import Banner from './Banner'
import { GallerySection } from './GallerySection'
import { Header } from './Header'
import { LocationSection } from './LocationSection'
import { OutsideDoors } from './OutsideDoors'

export const Dashboard = () => {
  return (
    <div> 
         <div>
        <Header />
        <Banner />
        <div className='max-w-7xl mx-auto mt-10'>
          <GallerySection />
          <LocationSection />
          <OutsideDoors />
        </div>
      </div>
    </div>
  )
}
