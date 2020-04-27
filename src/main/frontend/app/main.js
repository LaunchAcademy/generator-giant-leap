import React, {useEffect,useState} from "react";
import ReactDom from "react-dom";

const App = (props) => {
  const [pets, setPets] = useState([])
  const loadPets = () => {
    fetch("/api/v1/pets").then((resp) => {
      if(resp.ok) {
        return resp
      }
      else {
        throw new Error(resp.Error)
      }
    }).then(resp => {
      return resp.json()
    }).then(petsPayload => {
      setPets(petsPayload.content)
    }) 
  }
  useEffect(setPets, pets)  


  const petListItems = this.state.pets.map((pet) => {
    return (<li><h2>{ pet.name }</h2><p>{ pet.species}</p></li>)
  })
  return (<ul>{petListItems}</ul>)
}

ReactDom.render(<App />,document.getElementById("app"))