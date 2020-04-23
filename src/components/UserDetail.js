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

  console.log(currentUser)
  setTimeout(() => console.log(currentUser.login), 1000)

  return (
    <div className="user-detail ui container">
      <div className="user-detail ui segment">
        <div className="detail-container">
          <div className="avatar-container">
            {/* <img className="ui image" src={users.avatar_url} alt="user avatar" /> */}
            {/* <p>{currentUxser.login}</p> */}
          </div>
        </div>
        <button className="ui basic button">
          <NavLink to="/">Back</NavLink>
        </button>
      </div>
    </div>
  )
}

export default UserDetail
