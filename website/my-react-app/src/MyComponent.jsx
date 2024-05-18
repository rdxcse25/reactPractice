import React,{useState,useEffect} from 'react'
           //use object destructuring to extract individual variables and functions

function MyComponent(){
    // const [name,setName]                 =           useState("Guest");
    //   //array destructuring           //returns array with 2 elements-.var and setter function

    // const [age,setAge] = useState(0);

    // const updateName = () => {
    //     // name = "SpongeBob";
    //     // console.log(name);
    //     setName("SpongeBob");
    // }

    // const incrementAge = () => {
    //     setAge(age+1);
    // }

    // return(<div>
    //     <p>Name: {name}</p>
    //     <button onClick={updateName}>Set Name</button>

    //     <p>Age: {age}</p>
    //     <button onClick={incrementAge}>Increment Age</button>
    // </div>)




    //onChange
    // const [name,setName] = useState("Guest");
    // const [quantity,setQuantity] = useState();

    // function handleNameChange(event){
    //     setName(event.target.value);
    // }

    // function handleQuantityChange(event){
    //     setQuantity(event.target.value);
    // }

    // return(<div>
    //     <input value={name} onChange={handleNameChange}/>
    //     <p>Name: {name}</p>

    //     <input value={quantity} onChange={handleQuantityChange} type="number"/>
    //     <p>Quantity: {quantity}</p>
    // </div>);




    //Update Object in State
    // const [car,setCar] = useState({
    //     year: 2024,
    //     make:"Ford",
    //     model:"Mustang"
    // })

    // function handleYearChange(event){
    //     setCar(c => ({...c,year: event.target.value}));
    // }
    // function handleMakeChange(event){
    //     setCar(c => ({...c,make: event.target.value}));
    // }
    // function handleModelChange(event){
    //     setCar(c => ({...c,model: event.target.value}));
    // }

    // return(<div>
    //     <p>Your favourite car is: {car.year} {car.make} {car.model}</p>
    //     <input type="number" value={car.year} onChange={handleYearChange}/><br/>
    //     <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
    //     <input type="text" value={car.model} onChange={handleModelChange}/>
    // </div>)




    //update arrays in state
    // const [foods,setFoods] = useState(["Apple","Orange","Banana"]);

    // function handleAddFood(){
    //     const newFood = document.getElementById("foodInput").value; 
    //     document.getElementById("foodInput").value = "";
    //     setFoods(f => [...f,newFood]);
    // }

    // function handleRemoveFood(index){

    //     setFoods(foods.filter((_,i) => i !== index));
    // }

    // return(<div>
    //     <h2>List of Foods</h2>
    //     <ul>
    //         {foods.map((food,index) => (<li key={index} onClick={() => handleRemoveFood(index)}>
    //             {food}
    //         </li>))}
    //     </ul>
    //     <input type="text" id="foodInput" placeholder="Enter food name"/>
    //     <button onClick={handleAddFood}>Add Food</button>
    // </div>);



    //update array of objects in state
    // const [cars,setCars] = useState([]);
    // const [carYear,setCarYear] = useState(new Date().getFullYear());
    // const [carMake,setCarMake] = useState("");
    // const [carModel,setCarModel] = useState("");

    // function handleAddCar(){

    //     const newCar = {year: carYear,make: carMake,model: carModel};
    //     setCars(c => [...c,newCar]);

    //     setCarYear(new Date.getFullYear());
    //     setCarMake("");
    //     setCarModel("");
    // }

    // function handleRemoveCar(index){
    //     setCars(c => c.filter((_,i) => i !== index))
    // }

    // function handleYearChange(event){
    //     setCarYear(event.target.value);
    // }

    // function handleMakeChange(event){
    //     setCarMake(event.target.value);
    // }

    // function handleModelChange(event){
    //     setCarModel(event.target.value);
    // }

    // return(<div>
    //     <h2>List of Car Objects</h2>
    //     <ul>
    //         {cars.map((car,index) => 
    //         <li key={index} onClick={() => handleRemoveCar(index)}>
    //             {car.year} {car.make} {car.model}
    //         </li>)}
    //     </ul>
    //     <input type="number" value={carYear} onChange={handleYearChange}/><br/>
    //     <input type="text" value={carMake} onChange={handleMakeChange} placeholder='Enter Car Make'/><br/>
    //     <input type="text" value={carModel} onChange={handleModelChange} placeholder='Enter Car Model'/><br/>
    //     <button onClick={handleAddCar}>Add Car</button>
    // </div>)



    


    //useEffect()
    const [count,setCount] = useState(0);
    const [color,setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
        return(<>
            {/* some cleanup code */}
        </>);
    },[count,color]);

    function addCount(){
        setCount(c => c + 1);
    }

    function subtractCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(c => c==="green" ? "red" : "green");
    }

    return(<>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button><br/>
        <button onClick={changeColor}>Change Color</button>
    </>);














}
export default MyComponent