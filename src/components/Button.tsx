const buttonStyle = {
    backgroundColor: "blue",
    color: "white"
}

export const Button = ({ variant }) => {

    if (variant === "red") {
        buttonStyle.backgroundColor = "red"
    }

    return (
        <button style={buttonStyle}>En blå knapp</button>
    )
}