import React from 'react'
import { Card, Row, Col, Button} from "react-bootstrap";

const EducationList = ({school, major, position }) => {
  
  // console.log(key);
  // console.log(school);
  // console.log(major);
  // console.log(position);

  return (
    <Card.Text className='text-start'>
      <div class="alert alert-primary" role="alert">
      <Row className="align-items-start">
        <Col>
          <span>{school}</span>
          <br />
          <span className="text-muted">{`${major} (${
            position || ""
          })`}</span>
        </Col>
          <Col xs lg="1">
            <Button
              variant="outline-info"
              size="sm" 
              className="mr-3"
            >
              편집
            </Button>
          </Col>
      </Row>
       </div>
    </Card.Text>
  );

}

export default EducationList;
