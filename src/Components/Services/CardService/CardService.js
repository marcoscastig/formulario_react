import Card from 'react-bootstrap/Card';

export default function CardService({service}) {
    const{title, subtitle,image,footer}=service
  return (
    <Card style={{ width: '18rem' }} className='m-1'>
      <Card.Img className='mt-1' variant="top" src={image} alt="image" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          {subtitle}
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
      <footer className="blockquote-footer">
            {footer}
      </footer>
    </Card>
  )
}
