import React from 'react'
import Carditems from './Carditems'

function Cards() {
    return (
        <div>
            <div className="cards__heading mt-5 ">
            <p className="font-bold text-3xl text-center" >Start Reading Now</p>
            <p  className=" text-xl text-center mt-2">Enjoy popular titles handpicked by our editors.</p>
            </div>
            <div className="flex justify-center" >
            <div className="mt-10 lg:grid grid-cols-2  grid-cols-1  " >
            <Carditems 
            img="https://imgv2-2-f.scribdassets.com/img/word_document/317274694/original/216x287/4bb2ebde8d/1622343583?v=1"
            title="Corporate Chanakya on Leadership"
            author="Radhakrishnan"
            overview="Chanakya, the most powerful strategist of 4th Century BC, documented his ideas on leadership, in the Arthashastra."
            status="Read now"
            /> 
            <Carditems 
            img="https://imgv2-1-f.scribdassets.com/img/word_document/322011391/original/216x287/9d5f06ee76/1622453327?v=1"
            title="Subtle art of not Giving a Fuck"
            author="Mark Manson"
            overview="Flies in the face of so much conventional self-help wisdom that it’s hard not to label the book as anti-self-help."
            status="Read now"
            /> 
             <Carditems 
            img="https://imgv2-1-f.scribdassets.com/img/audiobook_square_badge/428512700/original/216x216/35b80ad9c7/1622371978?v=1"
            title="Think Like a Monk: Train Your Mind for Peace and Purpose Every Day"
            author="Jay Shetty"
            overview="Jay Shetty, social media superstar and host of the #1 podcast ‘On Purpose’, distils the timeless...."            
            status="Listen now"
            />    
          
             <Carditems 
            img="https://imgv2-2-f.scribdassets.com/img/word_document/253264900/original/216x287/8748646e62/1622461801?v=1"
            title="Sapiens: A Brief History of Humankind"
            author="Yuval Noah Harari"
            overview="Expand your mind in 2020 with author Yuval Noah Harari’s new classic. Harari dives deep and waxes philosophical about many of the large problems that plague us today. " 
            status="Read now"
            />
            
            </div>
            </div>
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
