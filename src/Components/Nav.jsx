import { useState } from 'react'

const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="52"
        height="4"
        rx="2"
        transform="translate(294 57)"
        fill="#574c4c"
      />
    </g>
  </svg>
);

const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="navContainer">
        <div>
          <h1 className='title'>Home</h1>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              {/* <NavLink to="/">Home</NavLink> */}
              <a href="https://github.com/KDavis006?tab=repositories" target='_blank' rel="noreferrer"><button>GitHub</button></a>
            </li>
            <li>
              {/* <NavLink to="/blog">Blog</NavLink> */}
              <a href="https://mail.google.com/chat/u/0/#chat/home" target='_blank' rel="noreferrer"><button>Google Chat</button></a>
            </li>
            <li>
              {/* <NavLink to="/projects">Projects</NavLink> */}
              <a href="https://west-mec.onelogin.com/portal" target='_blank' rel="noreferrer"><button>OneLogin</button></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav