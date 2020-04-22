import React from "react"
import "./UserItem.css"

const UserItem = ({ user }) => {
  return (
    <div className="ui segment">
      <div className="user-item item">
        <img className="ui image" src={user.avatar_url} alt="user avatar" />
        <div className="content">
          <a className="header">{user.login}</a>
          <button className="ui basic button">Details</button>
        </div>
      </div>
    </div>
  )
}

export default UserItem
