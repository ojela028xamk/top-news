import { Button, Card } from 'react-bootstrap'
import css from './Articles.module.scss'
import { useNewsData } from '../AppContainer'

const Articles = () => {
  const [{ currentArticles }] = useNewsData()

  return (
    <div className={css.articles}>
      {currentArticles.map((article, index) => {
        return (
          <Card key={index}>
            <Card.Img variant='top' src={article.urlToImage} />
            <Card.Body>
              <Card.Title>{article.title ? article.title : '<No Title>'}</Card.Title>
              <Card.Text>{article.description ? article.description : '<No Description>'}</Card.Text>
              <Button
                variant='primary'
                disabled={article.url ? false : true}
                href={article.url}
                target='_blank'
                rel='noreferrer'
              >
                Go to original
              </Button>
            </Card.Body>
          </Card>
        )
      })}
    </div>
  )
}

export default Articles
