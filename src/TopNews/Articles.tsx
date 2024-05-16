import { Button, Card, Spinner } from 'react-bootstrap'
import css from './Articles.module.scss'
import { useNewsData } from '../AppContainer'

const Articles = () => {
  const [{ currentArticles, currentCategory, isLoading }] = useNewsData()

  const getTimeAgo = (date: string) => {
    const currentDate = new Date() as any
    const articleDate = new Date(date) as any

    const seconds = Math.floor((currentDate - articleDate) / 1000)

    const days = Math.floor(seconds / 86400)

    if (days > 1) {
      return days + ' days ago'
    }

    if (days === 1) {
      return days + ' day ago'
    }

    const hours = Math.floor(seconds / 3600)

    if (hours > 1) {
      return hours + ' hours ago'
    }

    if (hours === 1) {
      return hours + ' hour ago'
    }

    return 'just now'
  }

  return (
    <>
      {isLoading ? (
        <Spinner animation='border' variant='primary' />
      ) : (
        <>
          <h1>{currentCategory}</h1>
          <div className={css.articles}>
            {currentArticles.map((article, index) => {
              return (
                <Card key={index} className={css.article_card}>
                  <Card.Img variant='top' src={article.urlToImage} />
                  <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                      {article.source.name} <i className='bi bi-circle-fill'></i> {getTimeAgo(article.publishedAt)}
                    </Card.Subtitle>
                    <Card.Text>{article.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button variant='primary' href={article.url} target='_blank' rel='noreferrer'>
                      Read article
                    </Button>
                  </Card.Footer>
                </Card>
              )
            })}
          </div>
        </>
      )}
    </>
  )
}

export default Articles
