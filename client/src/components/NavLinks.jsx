import React from 'react'
import  {useDashboardContext} from '../pages/DashboardLayout'
import links from '../utils/Links'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
 const {toggleSidebar}=useDashboardContext()
  return (
    <div>

      {links.map((link)=>{
       const {text,path,icon}=link
       return <NavLink
       to={path}
       key={text}
       className=''
       onClick={toggleSidebar}
       >
<span className=''>{icon}</span>
{text}
       </NavLink>
      })}
    </div>
  )
}

export default NavLinks
