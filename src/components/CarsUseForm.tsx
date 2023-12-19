import { useState } from "react";
import { useForm } from "react-hook-form";

export const CarsUseForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

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


    const onSubmitForm = (data) => {
        console.log(data);
        // event.preventDefault();
        // addCar(3, manufacturer, model);
        // setModel("");
        // setManufacturer("");
    }

    return <>
        <h1>Bilar</h1>
        {
            cars.map(car => <div key={car.id}>Manufacturer: {car.manufacturer}, Model: {car.model}</div>)
        }
        
        <form onSubmit={handleSubmit(onSubmitForm)}>
            <div>
                <div style={{color: 'red'}}>{errors.manufacturer && <span>This field is required</span>}</div>
                <label>Manufacturer</label>
                <input {...register("manufacturer", { required: true })} type="text"></input>
            </div>
            <div>
                <label>Model</label>
                <input {...register("model")} type="text" ></input>
            </div>
            <button type="submit">Spara bil</button>
        </form>
    </>

}