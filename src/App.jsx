import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ProfileDetailPage from './components/ProfileDetailPage/ProfileDetailPage'
import ProfileListPage from './components/ProfileListPage/ProfileListPage'
import About from './components/About/About'
import ProfileState from './shared/ProfileState'

function App() {

  return (
    <ProfileState>
      <header>
        <Navbar />
      </header>

      <Routes>
        <Route path="/" element={<ProfileListPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:profileLogin" element={<ProfileDetailPage />} />
      </Routes>
    </ProfileState>
  )
}

export default App
