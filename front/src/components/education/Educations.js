import {useState, useEffect ,useRef} from 'react';
import { Card, Row, Button, Col } from "react-bootstrap";
import EducationForm from './EducationForm';
import EducationEdit  from './EducationEdit';
import * as Api from "../../api";

// 제일 상위 컴포넌트! 
const Educations = ({portfolioOwnerId,isEditable}) => {
  
  //console.log(portfolioOwnerId);
  const [open, setOpen] = useState(false); // Add 버튼 누르면 open!
  const [data, setData] = useState([]); //일단 변수 사용해서 test!
  
  //  useEffect(() => {
  //    //사용자의 educations 이력 받아옴. 
  //    Api.get("educationlist", portfolioOwnerId).then((res) =>
  //    setData(res.data)
  //    );
  //  }, [portfolioOwnerId]);

  // const onCreate = async(school, major, position) => {
  //   const newItem = {
  //     school, // 학교명
  //     major, // 전공명
  //     position, // 
  //     //education_id: dataId.current 
  //     // key 값으로 사용할 id => 백엔드와 연결할때 삭제 예정
  //   };
  //   //dataId.current += 1;
  //   setData([newItem, ...data]);    

  // };


   return (
    <Card>
    <Card.Body>
        <Card.Title className='text-start'>학력</Card.Title>
        {data.map((item) => (
          <EducationEdit 
              item={item} 
              setData= {setData}
              isEditable = {isEditable}
          />         
        ))}
        <Button onClick={() => setOpen(true)}>+</Button>
        {open && (
          <EducationForm  
           userId = {portfolioOwnerId}
           setOpen = {setOpen}
           data = {data}
           setData = {setData} 
          />
        )}
     </Card.Body>
   </Card> 
   );
}

export default Educations;