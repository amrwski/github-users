import React from "react"

const Pagination = ({ onPageChange, isLoading }) => {
  return (
    <div className="pagination">
      {isLoading ? (
        <button className="ui primary loading button">Load more users...</button>
      ) : (
        <button className="ui inverted primary button" onClick={() => onPageChange()}>
          Load more users...
        </button>
      )}
    </div>
  )
}

export default Pagination
