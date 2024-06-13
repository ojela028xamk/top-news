import { createStateContext, useEffectOnce } from 'react-use'
import Navigation from './TopNews/Navigation'
import Articles from './TopNews/Articles'
import { Categories, NewsDataContext, TopNewsResponse } from './globalTypes'
import { getTopNews } from './Services/topHeadlineService'
import Footer from './TopNews/Footer'

export const [useNewsData, NewsDataProvider] = createStateContext<NewsDataContext>({
  currentArticles: [],
  currentCategory: Categories.GENERAL,
  isLoading: false,
  getNews: () => ({}),
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
        console.log('NO REQUEST!!!!!')
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

    setNewsData((prev) => ({
      ...prev,
      getNews: getNews,
    }))
  })

  return (
    <>
      <Navigation />
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
