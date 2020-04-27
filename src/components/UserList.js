import React from "react"
import UserItem from "./UserItem"
import Pagination from "./Pagination"
import "./UserList.css"

const UserList = ({ users, onPageChange, isLoading }) => {
  const renderedList = users.map((user) => <UserItem key={user.id} user={user} />)

  return (
    <div className="ui container">
      <div className="ui list">{renderedList}</div>
      <Pagination onPageChange={onPageChange} isLoading={isLoading} />
    </div>
  )
}

export default UserList
