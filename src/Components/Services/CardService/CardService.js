import Card from 'react-bootstrap/Card';

export default function CardService({service}) {
    const{title, subtitle,image,footer,link, key}=service
  return (
    <Card style={{ width: '18rem' }} className='m-1'>
      <Card.Img className='mt-1' variant="top" src={service.image} alt="image" />
      <Card.Body>
        <Card.Title>{service.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          {service.subtitle}
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
      <footer className="blockquote-footer">
            {service.footer}
      </footer>
    </Card>
  )
}
