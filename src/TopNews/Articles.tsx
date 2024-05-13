import { Button, Card } from 'react-bootstrap'
import { getTopHeadlines } from '../Services/topHeadlineService'
import { useState } from 'react'
import { Article, TopHeadlinesResponse } from '../globalTypes'
import css from './Articles.module.scss'

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([])

  const getArticles = () => {
    getTopHeadlines()
      .then((res) => {
        const response = res as TopHeadlinesResponse
        setArticles(response.articles)
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <Button variant='primary' onClick={getArticles}>
        Get news
      </Button>
      <div className={css.articles}>
        {articles.map((article) => (
          <Card>
            <Card.Img variant='top' src={article.urlToImage} />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>{article.description}</Card.Text>
              <Button variant='primary'>Go to original</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  )
}

export default Articles
