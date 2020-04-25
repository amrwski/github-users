import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import UserList from "./UserList"
import UserDetail from "./UserDetail"
import gh from "../api/gh"

class App extends React.Component {
  state = { users: [], resultsPerPg: 10 }

  componentDidMount = () => {
    this.loadUsers()
  }

  loadUsers = async () => {
    const response = await gh.get("/users", {
      params: { per_page: this.state.resultsPerPg },
    })
    this.setState({ users: response.data, link: response.headers.link })
  }

  onPageChange = () => {
    this.setState({ resultsPerPg: this.state.resultsPerPg + 10 })
    this.loadUsers()
    console.log("loaded new page", this.state.resultsPerPg)
  }

  render() {
    return (
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={(props) => (
            <UserList {...props} users={this.state.users} onPageChange={this.onPageChange} />
          )}
        />
        <Route
          exact
          path="/user/:userId"
          render={(props) => <UserDetail {...props} users={this.state.users} />}
        />
      </BrowserRouter>
    )
  }
}

export default App

// passing props to child using <Route> is done by passing a function through render props. Instead of using Routes `component` prop, use its `render` prop passing it as inline function
