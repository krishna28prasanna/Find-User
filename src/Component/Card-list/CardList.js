import React from "react";
import CardView from "./CardView";
import { Spinner } from "react-bootstrap";
import "./CardList.css"
const CardList = (props) => {
  console.log(props.getUser);
  return (
    <div className="container-fluid">
      <div className="row">
        {props.getUser && props.users.length != 0 ? (
          props.users.map((user, i) => {
            return (
              <div className="col-md-3 mb-2" key={user.id}>
                <CardView user={user} />
              </div>
            );
          })
        ) : props.getUser && props.users.length == 0 ? (
          <div className="display-message">User Doesn't Exist</div>
        ) : (
          <div>
            <Spinner animation="border" variant="success" className="data-spinner"/>
          </div>
        )}
      </div>
    </div>
  );
};
export default CardList;
