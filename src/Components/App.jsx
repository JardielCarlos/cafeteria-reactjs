import Food from "./Food";

function App() {
  const foods = [
    {
      id: 1,
      name: "Hambúrguer",
      image: "imgs/hamburguer.jpg",
    },
    {
      id: 2,
      name: "Suco",
      image: "imgs/suco.jpg",
    },
  ]
  return (
    <div className="container">
    <h1 className="mt-5 text-center">Menu</h1>

    <div className="text-right">
      <button type="button"
       className="btn btn-secondary 
       rounded-circle mr-4 font-weight-bold" 
       data-toggle="modal" 
       data-target="#formFoodModal" 
      //  onclick="loadFormCreateFood()"
      >
        +
      </button>
    </div>

    <section className="card-deck my-3">
      {foods.map((food) => {
        return <Food food={food} key={food.id} /> 
      })}
    </section>
    </div>
  );
}

export default App;
