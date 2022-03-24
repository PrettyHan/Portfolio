import { Card, Button, Row, Col } from "react-bootstrap";
import * as Api from '../../api'

function CertificateCard({ certificate, isEditable, setIsEditing, setCertificates }) {
  const stringwhenDate = ''+ certificate.whenDate;
  const whenDate = stringwhenDate.substring(0,10);

  // 삭제기능
  const deleteHandler = async () => {
    const userId = certificate.userId;
    await Api.delete(`certificate/${certificate.id}`);
    await Api.get('certificatelist', userId).then((res) => setCertificates(res.data));
};

  return (
    <Card.Text>
      <Row className="align-items-center">
        <Col>
          {certificate.title}
          <br />
          <span className="text-muted">{certificate.description}</span>
          <br />
          <span className="text-muted">{whenDate}</span>
        </Col>
        {isEditable && (
          <Col xs lg="1">
            <Button
              variant="outline-info"
              size="sm"
              onClick={() => setIsEditing((prev) => !prev)}
              className="mr-3 mb-1"
            >
              편집
            </Button>
            <Button
              className="mr-3"
              variant="danger"
              size="sm"
              onClick={deleteHandler}
            >
              삭제
            </Button>
          </Col>
        )}
      </Row>
    </Card.Text>
  );
}

export default CertificateCard;
