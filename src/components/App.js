import React from "react"
import UserList from "./UserList"
import gh from "../api/gh"

class App extends React.Component {
  state = { users: [] }

  componentDidMount = async () => {
    const response = await gh.get("/users", {
      params: { since: 10 },
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
