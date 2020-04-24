import React from "react"
import UserItem from "./UserItem"
import Pagination from "./Pagination"
import "./UserList.css"

const UserList = ({ users, link, onPageChange }) => {
  const renderedList = users.map((user) => <UserItem key={user.id} user={user} />)

  return (
    <div className="ui container">
      <div className="ui list">{renderedList}</div>
      <Pagination link={link} onPageChange={onPageChange} />
    </div>
  )
}

export default UserList
