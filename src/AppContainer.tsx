import { createStateContext, useEffectOnce } from 'react-use'
import Navigation from './TopNews/Navigation'
import Articles from './TopNews/Articles'
import { Categories, NewsDataContext, TopHeadlinesResponse } from './globalTypes'
import { getTopHeadlines } from './Services/topHeadlineService'

export const [useNewsData, NewsDataProvider] = createStateContext<NewsDataContext>({
  currentArticles: [],
  currentCategory: Categories.GENERAL,
  isLoading: false,
  getNews: () => ({}),
})

const AppContainer = () => {
  const setNewsData = useNewsData()[1]

  const getNews = (category: Categories) => {
    setNewsData((prev) => ({
      ...prev,
      isLoading: true,
    }))

    getTopHeadlines(category)
      .then((res) => {
        const response = res as TopHeadlinesResponse
        setNewsData((prev) => ({
          ...prev,
          currentArticles: response.articles,
          currentCategory: category,
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
    setNewsData((prev) => ({
      ...prev,
      getNews: getNews,
    }))
  })

  return (
    <>
      <Navigation />
      <Articles />
    </>
  )
}

const AppContext = () => (
  <NewsDataProvider>
    <AppContainer />
  </NewsDataProvider>
)

export default AppContext
