import {Card,Col,Row} from "react-bootstrap";
function CardComponent(props) {
  return (
    <div>
        
            <Card>
              <Card.Img variant="top" src={props.imageSrc} />
              <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
              </Card.Body>
            </Card>
          
    </div>
  );
}

export default CardComponent;