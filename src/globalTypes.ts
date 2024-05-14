export enum Categories {
  GENERAL = 'General',
  BUSINESS = 'Business',
  ENTERTAINMENT = 'Entertainment',
  HEALTH = 'Health',
  SCIENCE = 'Science',
  SPORTS = 'Sports',
  TECHNOLOGY = 'Technology',
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
