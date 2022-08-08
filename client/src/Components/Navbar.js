import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar__component'>
        
        {/* navbar mobile */}
        <div className='navbar__mobile'>

        </div>
        {/* navbar mobile */}

        {/* naavbar pc */}
        <div className='navbar__pc'>
            <div className='navbar__logo'>

            </div>
            <div className='navbar__links'>
                {/* <li><Link></Link></li> */}
            </div>

            <div className='navbar__user'>
                
            </div>
        </div>
        {/* naavbar pc */}

    </div>
  )
}

export default Navbar