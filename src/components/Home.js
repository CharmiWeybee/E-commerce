import React from 'react'
import { Features } from './Features'
import { Header } from './Header'
import { ProductCard } from './ProductCard'
import { SideBar } from './SideBar'

export const Home = () => {
  return (
    <>
          <Header></Header>
          <div className="d-flex">
                    <SideBar></SideBar> 
                    <ProductCard></ProductCard> 
             </div>
             <Features></Features>
    </>
  )
}
