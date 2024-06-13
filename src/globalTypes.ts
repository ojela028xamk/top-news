export type NewsDataContext = {
  currentArticles: News[]
  isLoading: boolean
  getNews: () => void
}

export type TopNewsResponse = {
  top_news: TopNews[]
  language: string
  country: string
}

export type TopNews = {
  news: News[]
}

export type News = {
  id: number
  title: string
  text: string
  summary: string
  url: string
  image: string
  video: string
  publish_date: string
  author: string
  authors: string[]
  language: string
  source_country: string
  sentiment: number
}
