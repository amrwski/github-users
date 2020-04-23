import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import UserList from "./UserList"
import UserDetail from "./UserDetail"
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
      <BrowserRouter>
        <div>
          <Route exact path="/" render={(props) => <UserList {...props} users={this.state.users} />} />
          <Route path="/user-detail" component={UserDetail} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App

// React Router is enabled by wrapping the whole App with <BrowserRouter>

// passing props to child using <Route> is done by passing a function through render props. Instead of using Routes component prop, use its render prop passing it an inline function, then pass along the arguments to the element you’re creating.
