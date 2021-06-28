import React from 'react'
import { Link } from 'react-router-dom'

function StyledNavbar() {
    return (
        <div>
            <Link to="/"> Home Page</Link>
            <Link to="/about"> About Page</Link>

        </div>
    )
}

export default StyledNavbar