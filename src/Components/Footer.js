import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import Deepfooter from './Deepfooter';

function Footer() {
    return (
        <div className=" cursor-pointer  "  >
            <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2  lg:p-16 p-8 " >
                   <div className=" ">
                           <p className="font-bold mt-2 hover:text-green-600" >About</p>
                        <div className="mt-2" >
                            <p className="hover:text-green-600" >About Scribd</p>
                            <p className="hover:text-green-600">Press</p>
                            <p className="hover:text-green-600">Our Blog</p>
                            <p className="hover:text-green-600">Join our Team!</p>
                            <p className="hover:text-green-600">Contact Us</p> 
                            <p className="hover:text-green-600">Invite friends</p>
                            <p className="hover:text-green-600">Gifts</p>
                            <p className="hover:text-green-600">Scribd for enterprise</p>
                        </div>
                   </div>

                   <div className="footer2" >
                          <p className="font-bold mt-2">Support</p>
                         <div className="mt-2" >
                         <p className="hover:text-green-600">Help/FAQ</p>
                         <p className="hover:text-green-600">Accessibility</p>
                         <p className="hover:text-green-600">Purchase Help</p>
                         <p className="hover:text-green-600">AdChoice</p>
                         <p className="hover:text-green-600">Publishers</p>
                       </div>
                   </div>

                   <div className="footer3">
                        <p className="font-bold mt-2 ">Legal</p>
                           <div className="mt-2" >
                               <p className="hover:text-green-600">Terms</p>
                               <p className="hover:text-green-600">Privacy</p>
                               <p className="hover:text-green-600">Copyright</p>
                           </div>
                   </div>

                   <div className="footer4" >
                          <p className="font-bold mt-2 ">Social</p>
                          <div className="flex mt-2 hover:text-green-600" >
                               <InstagramIcon />
                               <p className="text-xs" >Instagram</p>       
                          </div>
                          <div className="flex mt-1 hover:text-green-600" >
                               <TwitterIcon />
                               <p className="text-xs">Twitter</p>       
                          </div>
                          <div className="flex mt-1 hover:text-green-600" >
                               <FacebookIcon className="text-sm" />
                               <p className="text-xs">Facebook</p>       
                          </div>
                       
                          <div className="flex mt-1 hover:text-green-600" >
                               <PinterestIcon />
                               <p className="text-xs">Pininterest</p>       
                          </div>
                   </div>
               
               <div>
                   <p className="font-bold mt-2">Get Our free Apps</p>
                   <div className="mt-2" >
                       <img className="mt-2" src="https://s-f.scribdassets.com/webpack/assets/images/shared/app_store/appstore_white_en.f11cfc14.svg" alt="img" />
                       <img className="mt-2" src="https://s-f.scribdassets.com/webpack/assets/images/shared/app_store/playstore_en.52ebe950.svg" alt="img"/>
                   </div>
               </div>

            </div>
            <hr></hr>
            <Deepfooter />
        </div>
    )
}

export default Footer
