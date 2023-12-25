import React from 'react'
import AnimalGrid from '../Animal/AnimalGrid'
import "./ViewAnimal.css"
import axiosInstance from '../Axios'

const ViewAnimal = () => {
    const animals = [
        {
            nickname: "Shero",
            healthStatus: "Amazing",
            desc: "Shero is a very good animal and in excellent health"
          },
          {
            nickname: "Shero",
            healthStatus: "Amazing",
            desc: "Shero is a very good animal and in excellent health"
          },
          {
            nickname: "Shero",
            healthStatus: "Amazing",
            desc: "Shero is a very good animal and in excellent health"
          },
          {
            nickname: "Shero",
            healthStatus: "Amazing",
            desc: "Shero is a very good animal and in excellent health"
          },
          {
            nickname: "Shero",
            healthStatus: "Amazing",
            desc: "Shero is a very good animal and in excellent health"
          },
          {
            nickname: "Shero",
            healthStatus: "Amazing",
            desc: "Shero is a very good animal and in excellent health"
          },
          {
            nickname: "Shero",
            healthStatus: "Amazing",
            desc: "Shero is a very good animal and in excellent health"
          },
          {
            nickname: "Shero",
            healthStatus: "Amazing",
            desc: "Shero is a very good animal and in excellent health"
          }
    ]

  return (
    <>
        <AnimalGrid animals={animals} />
    </>
  )
}

export default ViewAnimal