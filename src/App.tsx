import './App.css'
import githubImage from "./assets/github_icon.png"
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <main>
      <div className='main-title-box'>
        <h1>
          GitHub Finder
        </h1>
        <img src={githubImage} alt="Imagem do GitHub" />
      </div>
      <Outlet />
    </main>
  )
}

export default App
