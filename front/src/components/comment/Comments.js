import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import * as Api from "../../api";
import CommentCard from "./CommentCard";
 import CommentAddForm from "./CommentAddForm";

function Comments({portfolioOwnerId, portfolioOwner, userState}) {

  const [getcomments, setGetComments] = useState([]);

  useEffect(() => { 
    try{
      Api.get(`educationlist` ,portfolioOwnerId).then((res) =>
      setGetComments(res.data));
    } 
    catch(error){
      console.log(error);
      if (error.response) {
       const { data } = error.response;
       console.error("data : ", data);
     }
    }
      }, [portfolioOwnerId]);

  return (
      <Card className="mb-3">
        <Card.Header as="h5">댓글</Card.Header>
        <Card.Body>
        { getcomments.map((comment) => (
              <CommentCard
                  key = {comment.id} 
                  getcomments={getcomments} 
                  setGetComments= {setGetComments}
              />         
            ))}
          <CommentAddForm 
          portfolioOwnerId = {portfolioOwnerId}
          portfolioOwner = {portfolioOwner}
          userState = {userState}
          />
        </Card.Body>
      </Card>
  );
}

export default Comments;
