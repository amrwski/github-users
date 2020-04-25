import React from "react"

const Pagination = ({ link, onPageChange }) => {
  // extracting `since` number from the link header
  const links = link.split(",")
  const sinceNums = links.map((link) => {
    return {
      sinceNum: link.split(";")[0].replace(">", "").replace("<", "").split("since=")[1],
      btnDesc: link.split(";")[1],
    }
  })
  const next = sinceNums[0].sinceNum

  console.log(sinceNums)

  return (
    <div className="pagination">
      <button onClick={() => onPageChange(0)}>First</button>
      <button onClick={() => onPageChange(next)}>Next</button>
    </div>
  )
}

export default Pagination
