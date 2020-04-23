import React from "react"
import { NavLink } from "react-router-dom"
import "./UserDetail.css"

class UserDetail extends React.Component {
  render() {
    return (
      <div className="user-detail ui container">
        <div className="user-detail ui segment">
          <button className="ui basic button">
            <NavLink to="/">Back</NavLink>
          </button>
        </div>
      </div>
    )
  }
}

export default UserDetail
