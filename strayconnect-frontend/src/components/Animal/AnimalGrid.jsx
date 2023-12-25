import React from 'react'
import "./AnimalGrid.css"
import "../../Global.css"
import AnimalCard from './AnimalCard'


const AnimalGrid = ( {animals} ) => {
    

  return (
    <>
    <div className="animalGrid">
    {
        
        animals.map((animal) => {
            return <AnimalCard animal = {animal}  />
        }
        )
    }
    </div>
    </>
  )
}

export default AnimalGrid