import React from "react"

const Pagination = ({ onPageChange, isLoading }) => {
  // extracting `since` number from the link header
  /* const links = link.split(",")
  const sinceNums = links.map((link) => {
    return {
      sinceNum: link.split(";")[0].replace(">", "").replace("<", "").split("since=")[1],
      btnDesc: link.split(";")[1],
    }
  })
  const next = sinceNums[0].sinceNum */

  return (
    <div className="pagination">
      {isLoading ? (
        <button className="ui primary loading button">Load more users...</button>
      ) : (
        <button className="ui blue button" onClick={() => onPageChange()}>
          Load more users...
        </button>
      )}
    </div>
  )
}

export default Pagination
