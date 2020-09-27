import React from "react";
import CardView from "./CardView"
const CardList = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {props.users.map((user,i) => {
          return (
            <div className="col-md-3 mb-2"  key={user.id}>
              <CardView user={user}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CardList;
