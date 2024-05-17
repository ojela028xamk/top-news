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
            {currentArticles
              .filter((article) => !article.title.includes('[Removed'))
              .map((article, index) => {
                const articleTitle = article.title.slice(0, article.title.lastIndexOf('-'))

                return (
                  <Card key={index} className={css.article_card}>
                    <Card.Img variant='top' src={article.urlToImage} />
                    <Card.Body className={css.body}>
                      <Card.Subtitle className={css.subtitle}>
                        {article.source.name} <i className='bi bi-circle-fill' /> {getTimeAgo(article.publishedAt)}
                      </Card.Subtitle>
                      <Card.Title className={css.title}>{articleTitle}</Card.Title>
                      <Card.Text className={css.text}>{article.description}</Card.Text>
                      <Button className={css.button} href={article.url} target='_blank' rel='noreferrer'>
                        Read article
                      </Button>
                    </Card.Body>
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
