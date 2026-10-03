function Button({text, onClick}) {
    return (
        <>
            <button onClick={onClick}>
                {text ? text : "Купить" }
            </button>
        </>
    )
}
export default Button