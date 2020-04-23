import React from "react"
import { NavLink } from "react-router-dom"

const UserItem = ({ user }) => {
  return (
    <div className="ui segment">
      <div className="user-item item">
        <img className="ui image" src={user.avatar_url} alt="user avatar" />
        <div className="content">
          <a className="header">{user.login}</a>
          <button className="ui basic button">
            <NavLink to={`/user/${user.id}`}>Detail</NavLink>
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserItem

// import NavLink from "react-router-dom"
