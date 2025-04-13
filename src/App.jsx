import { useState } from 'react'
import './App.css'
import Auctions from './components/auctions/Auctions'
import Hero from './components/Hero/Hero'
import Navber from './components/navber/Navber'
import Favourite from './components/favourite/Favourite'
import Footer from './components/footer/footer'


function App() {
  
  const [favourite,setFavourite] = useState([])
  const [total,setTotal] = useState(0);
  
   const handleFavourite = (item) =>{
        const newItem = [...favourite,item]
        const newTotal = total + item.currentBidPrice; 
        setFavourite(newItem)
        setTotal(newTotal);
   }

   const handleRemove = (itm) =>{
       const remainingFav = favourite.filter(fav => fav.id !== itm.id);
       setFavourite(remainingFav);
       const subTract = total - itm.currentBidPrice;
       setTotal(subTract);
   }
  return (
    <>
      <Navber></Navber>
      <Hero></Hero>
      
      <div className="mx-auto w-11/12 flex mt-28">
        <div className="w-[70%]">
          <Auctions handleFavourite={handleFavourite} favourite={favourite}></Auctions>
        </div>
        <div className="w-[30%]">
            <Favourite handleRemove={handleRemove} total={total} favourite={favourite}></Favourite>
        </div>
      </div>
      <Footer className=""></Footer>
    </>
  )
}

export default App