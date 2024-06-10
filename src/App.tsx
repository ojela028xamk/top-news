import css from './App.module.scss'
import AppContext from './AppContainer'
import logo from './topnews_logo.png'

function App() {
  return (
    <div className={css.App}>
      <img className={css.logo} src={logo} alt='Top News Logo' />
      <AppContext />
    </div>
  )
}

export default App
