import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import UserList from "./UserList"
import UserDetail from "./UserDetail"
import Spinner from "./Spinner"
import gh from "../api/gh"

class App extends React.Component {
  state = { users: [], resultsPerPg: 10, isLoading: false }

  componentDidMount = () => {
    this.loadUsers()
  }

  loadUsers = () => {
    this.setState({ isLoading: true }, async () => {
      const response = await gh.get("/users", {
        params: { per_page: this.state.resultsPerPg },
      })
      this.setState({ users: response.data, isLoading: false })
    })
  }

  onPageChange = () => {
    this.setState({ resultsPerPg: this.state.resultsPerPg + 10 })
    this.loadUsers()
  }

  render() {
    const { users, isLoading } = this.state

    return (
      <>
        {users.length === 0 ? (
          <Spinner />
        ) : (
          <BrowserRouter>
            <Route
              exact
              path="/users"
              render={(props) => (
                <UserList
                  {...props}
                  users={users}
                  onPageChange={this.onPageChange}
                  isLoading={isLoading}
                />
              )}
            />
            <Route
              exact
              path="/users/:userId"
              render={(props) => <UserDetail {...props} users={users} />}
            />
          </BrowserRouter>
        )}
      </>
    )
  }
}

export default App

// passing props to child using <Route> is done by passing a function through render props. Instead of using Routes `component` prop, use its `render` prop passing it as inline function
