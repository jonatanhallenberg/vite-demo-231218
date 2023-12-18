export const Bild = (props) => {

    console.log(props);

    props.enFunktion();

    return <img src={props.sokvag} />
}