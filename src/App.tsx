import bashLogo from '/250-bash.svg'
import Logo from './components/Logo'
import './App.css'

function App() {
  const bashLogoUrl = './public/250-bash.svg'
  return (
    <>
      <div>
        <h1>Jerry Vrabel Development</h1>
        <p>Web Application Development</p>
        <Logo src={bashLogoUrl} />
      </div>
    </>
  )
}

export default App
