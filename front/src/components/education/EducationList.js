import React from 'react'
import { Card, Row} from "react-bootstrap";

const EducationList = ({key,school, major, position}) => {

  console.log(key);
  console.log(school);
  console.log(major);
  console.log(position);

  return (
     <Card>
        <Row className="mt-3 text-center text-info">
          <Card.Text>{school}</Card.Text>
          <Card.Text>{major}({position})</Card.Text>
        </Row>
     </Card>
  );

}

export default EducationList;