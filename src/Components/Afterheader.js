import React from 'react'
import BookRoundedIcon from '@material-ui/icons/BookRounded';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import HeadsetRoundedIcon from '@material-ui/icons/HeadsetRounded';
import MicRoundedIcon from '@material-ui/icons/MicRounded';
import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import { Headset } from '@material-ui/icons';
function Afterheader() {
    return (
        <div className="afterheader" >
            <div className="afterheader__heading  mt-4 ">
            <p className="text-center lg:text-5xl text-3xl px-1 font-semibold"> All in one simple subscription</p>
                
                <div className="afterheader__Icons lg:grid-cols-6  grid grid-cols-2 mt-7  lg:px-96  " style={{alignItems:"center"}}>
                     
                    <div className="text-center ">  
                        <BookRoundedIcon style={{color:"#1E7B85"}} className="" />
                        <p className="font-semibold text-md mt-3" >Books</p>
                    </div>

                  <div className="text-center">
                       <HeadsetRoundedIcon style={{color:"#1E7B85"}} />
                       <p className="font-semibold text-md mt-3" >AudioBooks</p>
                  </div>

                  <div className="text-center">
                       <ImportContactsIcon style={{color:"#1E7B85"}} />
                       <p className="font-semibold text-md mt-3">Magazines</p>
                  </div>

                  <div className="text-center">
                      <MicRoundedIcon style={{color:"#1E7B85"}} />
                      <p className="font-semibold text-md mt-3">PodCast</p>
                  </div>

                  <div className="text-center">
                      <MusicNoteRoundedIcon  style={{color:"#1E7B85"}}/>
                      <p className="font-semibold text-md mt-3">Music</p>
                  </div>

                  <div className="text-center">
                      <DescriptionRoundedIcon style={{color:"#1E7B85",fontSize:"larger"}} />
                      <p className="font-semibold text-md mt-3">Documents</p>
                  </div>


             

                </div>
         </div>

         <div  className="text-center px-4  py-4  mt-10" style={{backgroundColor:"#FAFBFD",height:"200px"}} >
              <p className=" pt-12   text-xl   font-medium" >Scribd is overall the best and most convenient deal for<br></br> online reading.</p>
                   <p>Business Insider</p>
         </div>
    </div>
    )
}

export default Afterheader
