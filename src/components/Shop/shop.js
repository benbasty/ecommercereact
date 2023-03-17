import React from 'react'
import FeaturedProducts from '../Products/FeaturedProducts'
import NewArrival from '../New Arrival/NewArrival'
import ShopHeader from '../ShopHeader/ShopHeader'
const shop = () => {
  return (
    <div>
      <ShopHeader />
      <FeaturedProducts />
      <NewArrival />
      {/* put content of FeaturedProducts and NewArrival together : named AllProducts */}
    </div>
  )
}

export default shop