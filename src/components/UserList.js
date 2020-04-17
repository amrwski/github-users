import React from "react"

class UserList extends React.Component {
  render() {
    console.log(this.props.users)
    return (
      <div>
        {this.props.users.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </div>
    )
  }
}

export default UserList
