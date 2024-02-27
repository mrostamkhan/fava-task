import './App.css'
import Navbar from './components/Navbar/Navbar'
import ProfileDetailPage from './components/ProfileDetailPage/ProfileDetailPage'
import ProfileListPage from './components/ProfileListPage/ProfileListPage'

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <ProfileDetailPage profileLogin={'mrostamkhan'} />
    </>
  )
}

export default App
