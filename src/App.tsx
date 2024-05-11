import { useEffectOnce } from 'react-use'
import css from './App.module.scss'
// import { getTopHeadlines } from './Services/topHeadlineService'

function App() {
  useEffectOnce(() => {
    console.log('endpoint disabled')
    /*getTopHeadlines()
      .then((res) => console.log(res))
      .catch((err) => console.log(err))*/
  })

  return (
    <div className={css.App}>
      <h1>Top News</h1>
    </div>
  )
}

export default App
