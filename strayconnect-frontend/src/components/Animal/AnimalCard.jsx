import React from 'react'
import "./AnimalCard.css"
import "../../Global.css"
import { useState, useEffect } from 'react'
import axiosInstance from '../Axios'

const AnimalCard = ({animal}) => {

  return (
    <>
        <div className="animal-card">
            <div className="animal-image">
                <img src="https://th.bing.com/th/id/OIP.4vk5jA3UhGcPQLMwVR1ZiwHaE7?rs=1&pid=ImgDetMain" alt="" />
            </div>
            <h2 className="animal-name"> {animal.nickname} </h2>
            <h4 className="animal-status">{animal.desc}</h4>
            <button className="view-animal">View</button>

        </div>
    </>
  )
}

export default AnimalCard