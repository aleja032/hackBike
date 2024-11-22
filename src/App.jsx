import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './components/Home'
import Test2 from './components/Test2'
import Cycles from './components/Cycles'
import "./assets/styles/index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

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
