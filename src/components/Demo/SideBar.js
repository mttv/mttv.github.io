import React from 'react'

const sideBar = (props) => {
  return(
        <nav id="sidebar">
            <div className="sidebar-header">
                <input onChange={props.searchHandler} value={props.query} type="text" id="search-input" className="form-control" placeholder="search..." />
                <hr />
            </div>
            <div className="streams-list">
                <div className="result-counter d-flex justify-content-center">
                    {props.streams.list ? <span className="badge total">{props.streams.total}</span> : <span className="badge total">{props.totalFollowing}</span>}
                </div>
                <props.streamsListLayout />
            </div>
        </nav>
  )
}

export default sideBar