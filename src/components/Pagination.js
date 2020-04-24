import React from "react"

const Pagination = ({ link, onPageChange }) => {
  // console.log(link)
  const links = link.split(",")
  const urls = links.map((link) => {
    return {
      url: link.split(";")[0].replace(">", "").replace("<", ""),
      title: link.split(";")[1],
    }
  })
  const next = urls[0].url.split("=")[1]
  // const prev = urls[1].url.includes("since=") ? urls[1].url.split("=")[1] : ""
  console.log(next)
  // console.log(prev)

  return (
    <div className="pagination">
      <button>Prev</button>
      <button onClick={() => onPageChange(next)}>Next</button>
    </div>
  )
}

export default Pagination
