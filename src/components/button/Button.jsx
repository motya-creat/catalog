function Button({text}) {
    return (
        <>
            <button>
                {text ? text : "Купить" }
            </button>
        </>
    )
}
export default Button