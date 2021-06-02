import React from 'react'
import Carditems from './Carditems'

function Cards() {
    return (
        <div>
            <div className="cards__heading mt-5 ">
            <p className="font-bold text-3xl text-center" >Start Reading Now</p>
            <p  className=" text-xl text-center mt-2">Enjoy popular titles handpicked by our editors.</p>
            </div>
            {/* <Carditems />  */}
            
            <div className="text-center mt-3 " >
            <p style={{color:"#0D6069"}} className=" font-bold" >Show more</p>
            <button style={{backgroundColor:"#0D6069",outline:"none"}} className=" mt-5 rounded text-white px-10 py-2 text-center font-semibold" > Read free for 30 days </button>
             <p className="mt-2" >Cancel Time</p>
            </div>

            <div style={{backgroundColor:"#F0F2F9",height:"200px"}} className="  cards__company">
                   
                            <p className="text-center font-semibold text-xl mt-4 text-gray-400 ">In the press</p>
                            <div className="cards__company__img  lg:mt-4 lg:pt-6 md:pt-6 md:mt-4  sm:grid grid-cols-4 lg:grid-cols-4  md:grid-cols-2  lg:pl-48 pl-32 " >
                                    
                                    <div className="pt-3 md:mt-2 " >
                                        <img src="https://s-f.scribdassets.com/images/landing/index/logo_techcrunch.svg?5a3154a21" alt="" />
                                    </div>
                                    <div className="pt-3 md:mt-2">
                                        <img src="https://s-f.scribdassets.com/images/landing/index/logo_forbes.svg?5a3154a21" alt="" />
                                    </div>
                                    <div className="pt-3 md:mt-2">
                                        <img src="https://s-f.scribdassets.com/images/landing/index/logo_los_angeles_times.svg?5a3154a21"/>
                                    </div>
                                   
                                    <div className="md:mt-2" >
                                        <img src="https://s-f.scribdassets.com/images/landing/index/logo_today.svg?5a3154a21" alt="" />
                                    </div>

                            
                   </div>
            </div>
        </div>
    )
}

export default Cards
