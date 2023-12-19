import { useState } from "react";

export const Cars = () => {

    const [cars, setCars] = useState([{
        id: 1,
        manufacturer: "Volvo",
        model: "V70"
    },
    {
        id: 2,
        manufacturer: "Saab",
        model: "900"
    }])

    const updateManufacturerById = (id, newManufacturer, newModel) => {
        setCars(
            cars.map(car => car.id === id ? { ...car, manufacturer: newManufacturer, model: newModel } : car)
        )
    }

    const addCar = (id, manufacturer, model) => {
        const newCar = {
            id: id,
            manufacturer: manufacturer,
            model: model
        }

        //Gör inte såhär då blir statet muterat
        // cars.push(newCar)

        setCars([...cars, newCar])
    }

    const removeCarById = (id) => {

        //1. Använd .filter för att filtrera bort bilen med id som kommer in i funkitionen
        const updatedCars = cars.filter(car => car.id !== id);

        //2. Anropa setCars med den nya filtrerade listan
        setCars(updatedCars);

    }

    const [manufacturer, setManufacturer] = useState("");

    //Uppgift: 
    // 1. Skapa en state-variabel för model
    // 2. När textrutan för model ändras -> spara ner nya värdet med setModel
    // 3. Uppdatera onSubmitForm så att värdet från statet används istället för hårdkodat "Modell"
    // 4. Töm alla textboxar när man postat

    const onSubmitForm = (event) => { 
        event.preventDefault();
        addCar(3, manufacturer, "Modell");
    }

    return <>
        <h1>Bilar</h1>
        {
            cars.map(car => <div key={car.id}>Manufacturer: {car.manufacturer}, Model: {car.model}</div>)
        }
        {/* <button onClick={() => updateManufacturerById(1, "Ford", "Focus")}>Uppdatera volvo till ford</button> */}

        {/* <button onClick={() => addCar(3, "VW", "Beetle")}>Lägg till bil</button> */}
        {/* <button onClick={() => removeCarById(1)}>Ta bort Volvo</button> */}

        <form onSubmit={onSubmitForm}>
            <div>
                <label>Manufacturer</label>
                <input value={manufacturer} onChange={(event) => setManufacturer(event.target.value)} type="text"></input>
                {manufacturer}
            </div>
            <div>
                <label>Model</label>
                <input type="text"></input>
            </div>
            <button type="submit">Spara bil</button>
        </form>
    </>

}