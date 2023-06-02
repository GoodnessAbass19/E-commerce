import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumbs = () => {
const location = useLocation()

let currentLink = ''

const crumbs = location.pathname.split('/')
.filter(crumb => crumb !== '')
.map(crumb => {
    currentLink += `/${crumb}`

    return(
      <div key={crumb} className='crumb' >
          <Link to={currentLink}>{crumb}</Link>
      </div>
    )
})

  return (
    <div className='breadcrumbs text-xl font-semibold capitalize px-5'>
        {crumbs}
    </div>
  )
}

export default Breadcrumbs