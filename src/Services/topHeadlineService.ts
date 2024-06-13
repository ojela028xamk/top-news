import { Categories } from '../globalTypes'

const token = process.env.REACT_APP_NEWSAPI

const getNewsLegacy = async (url: string) => {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }

  try {
    const response = await fetch(url, options)
    return await response.json()
  } catch (err) {
    throw err
  }
}

const getTopHeadlines = async (category: Categories) => {
  return getNewsLegacy(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${token}&category=${category.toLocaleLowerCase()}`
  )
}

const getNews = async (url: string) => {
  const options = {
    method: 'GET',
    headers: {
      'x-api-key': '7627a5aeee3b4341a014c28f5d138401',
    },
  }

  try {
    const response = await fetch(url, options)
    return await response.json()
  } catch (err) {
    throw err
  }
}

const getTopNews = async () => {
  return getNews(`https://api.worldnewsapi.com/top-news?source-country=us&language=en&date=2024-06-12`)
}

export { getTopHeadlines, getTopNews }
