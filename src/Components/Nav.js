import { MenuBookOutlined, MenuOutlined } from '@material-ui/icons'
import React from 'react'

function Nav() {
    return (
        <div className="nav flex justify-between  p-3 sticky top-0 z-50 "style={{backgroundColor:"#00293F",alignItems:"center"}} >
            <div className="nav__left  text-white  ">
                   <MenuOutlined className="cursor-pointer" />
                   <img src="" />
            </div>
            <div className="header__right lg:pr-10  ">
                <button style={{outline:"none"}} className="text-white  font-semibold px-7 py-2 rounded  border-white  border-2    " >SignIn</button>
            </div>
        </div>
    )
}

export default Nav
