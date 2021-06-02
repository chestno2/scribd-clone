import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
function Footer() {
    return (
        <div className="" >
            <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2  lg:p-16 p-8 " >
                   <div className=" ">
                           <p className="font-bold mt-2" >About</p>
                        <div className="mt-2" >
                            <p>About Scribd</p>
                            <p>Press</p>
                            <p>Our Blog</p>
                            <p>Join our Team!</p>
                            <p>Contact Us</p> 
                            <p>Invite friends</p>
                            <p>Gifts</p>
                            <p>Scribd for enterprise</p>
                        </div>
                   </div>

                   <div className="footer2" >
                          <p className="font-bold mt-2">Support</p>
                         <div className="mt-2" >
                         <p>Help/FAQ</p>
                         <p>Accessibility</p>
                         <p>Purchase Help</p>
                         <p>AdChoice</p>
                         <p>Publishers</p>
                       </div>
                   </div>

                   <div className="footer3">
                        <p className="font-bold mt-2">Legal</p>
                           <div className="mt-2" >
                               <p>Terms</p>
                               <p>Privacy</p>
                               <p>Copyright</p>
                           </div>
                   </div>

                   <div className="footer4" >
                          <p className="font-bold mt-2">Social</p>
                          <div className="flex mt-2 " >
                               <InstagramIcon />
                               <p className="text-xs" >Instagram</p>       
                          </div>
                          <div className="flex mt-1 " >
                               <TwitterIcon />
                               <p className="text-xs">Twitter</p>       
                          </div>
                          <div className="flex mt-1" >
                               <FacebookIcon className="text-sm" />
                               <p className="text-xs">Facebook</p>       
                          </div>
                       
                          <div className="flex mt-1 " >
                               <PinterestIcon />
                               <p className="text-xs">Pininterest</p>       
                          </div>
                   </div>
               
               <div>
                   <p className="font-bold mt-2">Get Our free Apps</p>
                   <div className="mt-2" >
                       <img className="mt-2" src="https://s-f.scribdassets.com/webpack/assets/images/shared/app_store/appstore_white_en.f11cfc14.svg" />
                       <img className="mt-2" src="https://s-f.scribdassets.com/webpack/assets/images/shared/app_store/playstore_en.52ebe950.svg"/>
                   </div>
               </div>

            </div>
        </div>
    )
}

export default Footer
