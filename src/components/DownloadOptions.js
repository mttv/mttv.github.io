import React from 'react'

const donwloadOptions = () => {
    return(
        <div className="modal fade" id="download-options" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="blur-bg" />
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">Download</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="alert alert-primary" role="alert">
                            Coming soon...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default donwloadOptions