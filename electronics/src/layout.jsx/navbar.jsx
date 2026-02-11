import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { searchContext } from '../searchprovider'
const Navbar = () => {
  const{search,setsearch}=useContext(searchContext)
  return (<>
    <nav className='w-full h-16 bg-black text-white'>
     <div className='flex items-center w-full h-full'>
              <div  className=' flex items-center  ml-5 h-full w-1/3'>
                  <ul className=' hidden md:flex gap-10 '>
                        <Link to="/about">  <li>About</li></Link>
                        <Link to="/products"><li>Shop</li></Link>
                        {/* console */}
                        <Link to="/contact"> <li>Contact</li></Link>
                  </ul>

                {/* menubutton */}
      <button className=' flex items-center ml-5 md:hidden' ><i className="fa-solid fa-bars"></i></button>
                
                  </div>
                  
                  
                

                <div  className='flex items-center justify-center h-full w-1/3'>
                <Link to="/" > <h1 className=' text-2xl'>D.Mitra</h1></Link>
                </div>

                <div  className='flex items-center justify-end mr-5 h-full w-1/3'>
                  <ul className='flex gap-10 '>
                    <li className='hidden md:flex items-center'>
                      <input placeholder='search here ' value={search} onChange={(e)=>{
                                                              setsearch(e.target.value)
                                                             }
                      } className='border-b border-white'></input>
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </li>
                      <Link to="/login"><li className='hidden md:flex'>Login</li></Link>
                      <Link to="/mycart"><li><i className="fa-solid fa-cart-shopping"></i></li></Link> 
                  </ul>
                </div>
            
     </div>
    </nav>
    </>
  )
}

export default Navbar