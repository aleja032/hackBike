
import PropTypes from 'prop-types'
import "./layout.css"

import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div className='layout'>
      <header className='header'>
        <Header />
      </header>
      <main className='mainContent'>
        {children}
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout

