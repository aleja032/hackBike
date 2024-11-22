
import PropTypes from 'prop-types'
import "./layout.css"

import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div className='layout'>

      <Header className="header" />

      <main className='mainContent'>
        {children}
      </main>
      <Footer className="footer" />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout

