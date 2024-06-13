export enum Categories {
  GENERAL = 'General',
  BUSINESS = 'Business',
  ENTERTAINMENT = 'Entertainment',
  HEALTH = 'Health',
  SCIENCE = 'Science',
  SPORTS = 'Sports',
  TECHNOLOGY = 'Technology',
}

export type NewsDataContext = {
  currentArticles: News[]
  currentCategory: Categories
  isLoading: boolean
  getNews: (category: Categories) => void
}

export type TopHeadlinesResponse = {
  status: string
  totalResults: number
  articles: Article[]
}

export type Article = {
  source: Source
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

export type Source = {
  id: string
  name: string
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
