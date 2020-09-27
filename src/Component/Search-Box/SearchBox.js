import React from "react"
import { Form } from "react-bootstrap";
const SearchBox = (props)=>{
    console.log("search")
    return(
        <Form>
          <div className="form-group">
              <input type="text" className="form-control" placeholder="Search User" id="searchVal" name="searchVal" onChange={props.handleChange} />
          </div>
        </Form>
    )
}
export default SearchBox