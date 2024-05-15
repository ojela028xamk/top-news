import css from './App.module.scss'
import AppContext from './AppContainer'

function App() {
  return (
    <div className={css.App}>
      <h1>Top News</h1>
      <AppContext />
    </div>
  )
}

export default App
