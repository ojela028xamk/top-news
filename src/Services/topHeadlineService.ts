const token = process.env.REACT_APP_NEWSAPI

const getNews = async (url: string): Promise<unknown> => {
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

const getTopHeadlines = async (): Promise<unknown> => {
  return getNews(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${token}`)
}

export { getTopHeadlines }
