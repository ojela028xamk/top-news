import { createStateContext, useEffectOnce } from 'react-use'
import Articles from './TopNews/Articles'
import { NewsDataContext, TopNewsResponse } from './globalTypes'
import { getTopNews } from './Services/topHeadlineService'
import Footer from './TopNews/Footer'

export const [useNewsData, NewsDataProvider] = createStateContext<NewsDataContext>({
  currentArticles: [],
  isLoading: false,
})

const AppContainer = () => {
  const setNewsData = useNewsData()[1]

  const getNews = () => {
    setNewsData((prev) => ({
      ...prev,
      isLoading: true,
    }))

    getTopNews()
      .then((res) => {
        const response = res as TopNewsResponse
        const newsArr = response.top_news.map((headline) => headline.news[0])

        sessionStorage.setItem('topNews', JSON.stringify(newsArr))

        setNewsData((prev) => ({
          ...prev,
          currentArticles: newsArr,
        }))
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setNewsData((prev) => ({
          ...prev,
          isLoading: false,
        }))
      })
  }

  useEffectOnce(() => {
    const hasNewsData = sessionStorage.getItem('topNews')

    if (!hasNewsData) getNews()

    if (hasNewsData) {
      setNewsData((prev) => ({
        ...prev,
        currentArticles: JSON.parse(hasNewsData),
      }))
    }
  })

  return (
    <>
      <Articles />
      <Footer />
    </>
  )
}

const AppContext = () => (
  <NewsDataProvider>
    <AppContainer />
  </NewsDataProvider>
)

export default AppContext
