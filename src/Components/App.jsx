import Food from "./Food";
import { Button, Container } from 'react-bootstrap'
import { useRef, useState } from "react";
import data from '../models/foods.js'

import 'bootstrap/dist/css/bootstrap.css';

import 'bootstrap/dist/js/bootstrap.bundle';



function App() {
  
  const [foods, setFoods] = useState(data);

  const buttonAdd = useRef(null)
  
  const handleClick = () => {

    const food = {
      id: 3,
      name: "Batata",
      image: "imgs/batatafrita.jpg",
    }

    setFoods([...foods, food])

    buttonAdd.current.disabled = true;
  }

  return (
    <Container>
      <div className="container">
      <h1 className="mt-5 text-center">Menu</h1>

      <div className="text-right">
        <Button type="button"
        className="btn btn-secondary 
        rounded-circle mr-4 font-weight-bold" 
        data-toggle="modal" 
        data-target="#formFoodModal" 
        onClick={handleClick}
        ref={buttonAdd}
        >
          +
        </Button>
      </div>

      <section className="card-deck my-3">
        {foods.map((food) => {
          return <Food food={food} key={food.id} /> 
        })}
      </section>
      </div>
    </Container>
  );

  
}

export default App;
