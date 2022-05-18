import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
<div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <Link class="navbar-brand" to={'/'}>Social Media </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link class="nav-link active" to='/'>Add Post</Link>
                    <Link class="nav-link active" to='/search' >Search Post</Link>
                    <Link class="nav-link active" to='/viewpro' >View All Post</Link>
                </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header