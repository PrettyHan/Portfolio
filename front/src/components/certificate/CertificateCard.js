import { Card, Button, Row, Col } from "react-bootstrap";

function CertificateCard({ certificate, isEditable, setIsEditing }) {
  const toStringwhenDate = ''+ certificate.whenDate;
  const whenDate = toStringwhenDate.substring(0,10);

  return (
    <Card.Text>
      <Row className="align-items-center">
        <Col>
          {certificate.title}
          <span className="text-muted">{certificate.description}</span>
          <span className="text-muted">{whenDate}</span>
        </Col>
        {isEditable && (
          <Col xs lg="1">
            <Button
              variant="outline-info"
              size="sm"
              onClick={() => setIsEditing((prev) => !prev)}
              className="mr-3"
            >
              편집
            </Button>
          </Col>
        )}
      </Row>
    </Card.Text>
  );
}

export default CertificateCard;
