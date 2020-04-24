import React from "react"
import { NavLink } from "react-router-dom"
import { get as _get } from "lodash"
import "./UserDetail.css"

const UserDetail = ({ users, match }) => {
  // console.log(users)

  const {
    params: { userId },
  } = match

  const currentUser = users.filter((user) => user.id == userId)

  // accessing login in the currentUser object with lodash as `currentUser[0].login` throws an error
  const userLogin = _get(...currentUser, "login")
  const userAvatar = _get(...currentUser, "avatar_url")
  const userUrl = _get(...currentUser, "html_url")

  return (
    <div className="user-detail ui container">
      <div className="user-detail ui segment">
        <div className="detail-container">
          <div className="avatar">
            <img className="ui image" src={userAvatar} alt="user avatar" />
          </div>
          <div className="login">
            <div>ID: {userId}</div>
            <div>{userLogin}</div>
          </div>
          <div className="user-url">
            <a href={userUrl} target="_blank" rel="noopener noreferrer">
              {userUrl}
            </a>
          </div>
        </div>
        <NavLink to="/">
          <button className="ui basic button">Back </button>
        </NavLink>
      </div>
    </div>
  )
}

export default UserDetail
