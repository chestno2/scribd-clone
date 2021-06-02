import { ExpandMoreRounded } from '@material-ui/icons'
import React from 'react'

function Deepfooter() {

    const d = new Date();
    const year =  d.getFullYear();

    return (
        <div className="lg:flex justify-between  cursor-pointer  " style={{alignItems:"center"}}  >
           
            <div className="grid lg:grid-cols-8 grid-cols-4 px-4 pt-2 text-xs  lg:w-1/2 lg:pl-10 " >
                    <div className=" lg:pl-6"  >
                        
                        <p className=" py-2 " >Books</p>
                    </div>
                    <div>
                        <p className=" py-2 ">AudioBooks</p>
                    </div>
                    <div>
                        <p className=" py-2 ">Magaznies</p>
                    </div>
                    <div>
                        <p className=" py-2 ">Podcasts</p>
                    </div>
                    <div>
                        <p className=" py-2 ">Sheet Music</p>
                    </div>
                    <div>
                        <p className=" py-2 ">Documents</p>
                    </div>
                    <div>
                        <p className=" py-2 ">Snapshot</p>
                    </div>
                    <div>
                        <p className=" py-2 ">Directory</p>
                    </div>
            </div>
            <div className="flex text-xs lg:pr-40 p-4 " style={{alignItems:"center"}} >
                <p>Language:English</p>
                <ExpandMoreRounded />
                <p>Copyright &copy;	 {year} Scribd Inc. </p>
            </div>
        </div>
    )
}

export default Deepfooter
