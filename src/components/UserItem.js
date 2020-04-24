import React from "react"
import { NavLink } from "react-router-dom"

const UserItem = ({ user }) => {
  return (
    <div className="ui segment">
      <div className="user-item item">
        <img className="ui image" src={user.avatar_url} alt="user avatar" />
        <div className="content">
          <div className="header">{user.login}</div>
          <NavLink to={`/user/${user.id}`}>
            <button className="ui basic button">Details</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default UserItem

// import NavLink from "react-router-dom"
