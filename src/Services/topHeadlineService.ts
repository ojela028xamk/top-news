const token = process.env.REACT_APP_NEWSAPI

const getNews = async (url: string) => {
  const options = {
    method: 'GET',
    headers: {
      'x-api-key': token ? token : '',
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
  const currentDate = new Date().toJSON().slice(0, 10)
  return getNews(`https://api.worldnewsapi.com/top-news?source-country=us&language=en&date=${currentDate}`)
}

export { getTopNews }
