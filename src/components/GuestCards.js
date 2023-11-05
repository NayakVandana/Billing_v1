import { Container,Col, Row } from "react-bootstrap";
import CardComponent from "./CardComponent";
function GuestCards() {
  return (
    <div>
      <Container className="py-3">
        <div className="d-flex justify-content-start p-1"><h2 class="text-left">Why Billing Manager?</h2></div>
        <Row>
          <Col lg={4} md={12} className="p-3">
            <CardComponent
              imageSrc="https://img.freepik.com/free-vector/colleagues-discussing-accounting-statistics-report-using-software_74855-4389.jpg?w=1380&t=st=1699176572~exp=1699177172~hmac=90934ff83eee24e250178edae9413b99cd7c3868f76c4b2424d051e259fcedd0"
              title="Super Easy Quiz Builder"
              description="Very easy to use quiz builder and amazing support - make it super easy to go live with your quiz in few minutes."
            />
          </Col>
          <Col lg={4} md={12} className="p-3">
            <CardComponent
              imageSrc="https://img.freepik.com/free-vector/colleagues-discussing-accounting-statistics-report-using-software_74855-4389.jpg?w=1380&t=st=1699176572~exp=1699177172~hmac=90934ff83eee24e250178edae9413b99cd7c3868f76c4b2424d051e259fcedd0"
              title="Increase Your Conversions"
              description="Capture customer responses and leads instantly. Connect them to the perfect products. Increase conversion and reduce returns."
            />
          </Col>
          <Col lg={4} md={12} className="p-3">
            <CardComponent
              imageSrc="https://img.freepik.com/free-vector/colleagues-discussing-accounting-statistics-report-using-software_74855-4389.jpg?w=1380&t=st=1699176572~exp=1699177172~hmac=90934ff83eee24e250178edae9413b99cd7c3868f76c4b2424d051e259fcedd0"
              title="Gain Insight"
              description="Get to know who visits your online store, what they’re looking for, what drives them to convert. Plan marketing campaigns with confidence."
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GuestCards;
