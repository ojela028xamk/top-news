import { Button, Card, Spinner } from 'react-bootstrap'
import css from './Articles.module.scss'
import { useNewsData } from '../AppContainer'
// Photo by Markus Spiske: https://www.pexels.com/photo/coffee-cup-smartphone-notebook-97050/
import placeholder from '../placeholder.jpg'

const Articles = () => {
  const [{ currentArticles, isLoading }] = useNewsData()

  const sortedArticles = currentArticles.sort((a, b) => Date.parse(b.publish_date) - Date.parse(a.publish_date))

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
        <Spinner animation='border' variant='primary' style={{ width: '5rem', height: '5rem', margin: '1em' }} />
      ) : (
        <div className={css.articles}>
          <div className={css.articles_list}>
            <div className={css.articles_grid}>
              {sortedArticles.map((article, index) => {
                return (
                  <Card key={index} className={css.article_card}>
                    <Card.Img variant='top' src={article.image ? article.image : placeholder} />
                    <Card.Body className={css.body}>
                      <Card.Subtitle className={css.subtitle}>
                        {article.author} <i className='bi bi-circle-fill' /> {getTimeAgo(article.publish_date)}
                      </Card.Subtitle>
                      <Button className={css.button} href={article.url} target='_blank' rel='noreferrer'>
                        Read article
                      </Button>
                      <Card.Title className={css.title}>{article.title}</Card.Title>
                      <Card.Text className={css.text}>
                        {article.summary ? article.summary : '<No description>'}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Articles
