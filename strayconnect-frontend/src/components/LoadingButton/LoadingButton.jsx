import React from 'react'
import "../../Global.css"
import "./LoadingButton.css"

const LoadingButton = () => {
  return (
    <div className="loadingButtonContainer" >
        <div className="loading-dots"></div>
        <div className="loading-dots"></div>
        <div className="loading-dots"></div>
    </div>
  )
}

export default LoadingButton