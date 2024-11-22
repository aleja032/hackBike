import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/styles/App.css'
import Layout from './layout/Layout'
import Home from './components/Home'
import Test1 from './components/Test1'
import Test2 from './components/Test2'
import Cycles from './components/Cycles'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/cycles" element={<Cycles />} />
          <Route path="/test2" element={<Test2 />} />

        </Routes>
      </Layout>
    </Router>

  )
}

export default App
