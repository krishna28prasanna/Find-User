import React, { Component } from "react";
import axios from "../../Config/Axios";
import CardList from "../Card-list/CardList";
import SearchBox from "../Search-Box/SearchBox"
class UserList extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchVal : ""
    };
  }
  componentDidMount() {
    axios
      .get("users")
      .then((response) => {
        this.setState({
          users: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  render() {
    const {users,searchVal} = this.state
    const filteredUser = users.filter(user=>user.name.toLowerCase().includes(searchVal.toLocaleLowerCase()))
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="offset-5 col-md-2">
        <SearchBox handleChange={this.handleChange}/>
          </div>
        </div>
        <CardList users={filteredUser} />
      </div>
    );
  }
}
export default UserList;
