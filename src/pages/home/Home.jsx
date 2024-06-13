import React from 'react'
import Banner from '../../components/Banner'
import FavoriteBook from '../../components/FavoriteBook'
import BestSellerBook from '../../components/BestSellerBook'
import PromoBanner from '../../components/PromoBanner'

export default function Home() {
  return (
    <div>

      <Banner/>
      
      <BestSellerBook/>
      <FavoriteBook/>
      <PromoBanner/>
    </div>
  )
}
