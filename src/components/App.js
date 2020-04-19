import React from "react"
import UserList from "./UserList"
import gh from "../api/gh"

class App extends React.Component {
  state = { users: [], currentUser: null }

  componentDidMount = async () => {
    const response = await gh.get("/users", {
      params: { since: 1 },
    })
    this.setState({ users: response.data })
  }

  render() {
    return (
      <div>
        <UserList users={this.state.users} />
      </div>
    )
  }
}

export default App

{
  /* <div class="ui list">
  <div class="item">
    <img class="ui avatar image" src="/images/avatar2/small/rachel.png">
    <div class="content">
      <a class="header">Rachel</a>
      <div class="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
    </div>
  </div> */
}
