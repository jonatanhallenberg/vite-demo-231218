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
        //2. Anropa setCars med den nya filtrerade listan

    }

    return <>
        <h1>Bilar</h1>
        <button onClick={() => updateManufacturerById(1, "Ford", "Focus")}>Uppdatera volvo till ford</button>
        {
            cars.map(car => <div>{car.manufacturer}</div>)
        }
        <button onClick={() => addCar(3, "VW", "Beetle")}>Lägg till bil</button>
        <button onClick={() => removeCarById(1)}>Ta bort Volvo</button>
    </>

}