export const BildText = ({ animalType, speed, children  }) => {
    return (<p>Bilden visar en {animalType}.
        Den kan flyga i {speed} km/h vilket
        motsvarar {speed / 3.6} m/s. Mina barn är: {children}</p>
    );
}