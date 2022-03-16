import React from 'react'
import { Card, Row, Col} from "react-bootstrap";

const EducationList = ({key,school, major, position }) => {
  
  // console.log(key);
  // console.log(school);
  // console.log(major);
  // console.log(position);

  return (
    <Card.Text>
    <Row className="align-items-start">
      <Col>
        <div class="align-items-start" role="alert">
        <span>{school}</span>
         <br />
        <span className="text-muted">{`${major} (${
          position || ""
        })`}</span>
      </div>
      </Col>
    </Row>
  </Card.Text>
  );

}

export default EducationList;