import React from 'react'

function Header() {

    return (
        
        <div className="" style={{backgroundColor:"#00293F",height:"512px"}}    >
            <div className="Header__left lg:pt-32  pt-48  px-6   ">
                <h1   className="lg:text-5xl text-3xl font-bold text-white lg:px-3" >Endless entertainment <br></br>and knowledge</h1>
                <p className="font-bold lg:p-3 text-white mt-4 " >Read or listen anytime, anywhere.</p>
             
               <button className=" text-xl lg:ml-4 mt-3 font-semibold py-2  lg:px-20 px-6 text-center rounded-sm " style={{backgroundColor:"#FFFFFF"}}  >Read free for 30days</button>
            <p className=" text-gray-200 lg:pl-3 pt-3" >Only $8.99/month after. Cancel anytime.</p>
            </div>
        </div>
    )
}

export default Header
