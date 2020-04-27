import React from "react"

const Pagination = ({ onPageChange }) => {
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
      <button className="ui inverted primary button" onClick={() => onPageChange()}>
        Load more users...
      </button>
    </div>
  )
}

export default Pagination
