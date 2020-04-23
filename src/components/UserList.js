import React from "react"
import UserItem from "./UserItem"
import "./UserList.css"

const UserList = ({ users }) => {
  console.log(users)

  const renderedList = users.map((user) => <UserItem key={user.id} user={user} />)

  return (
    <div className="ui container">
      <div className="ui list">{renderedList}</div>
    </div>
  )
}

export default UserList
