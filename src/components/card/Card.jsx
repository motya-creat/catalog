import Button from "../button/Button.jsx"
function Card ({id, title, description, price, url}) {
    return (
        <>
            <div className="card" id={id}>
                <div className="card-image">
                    <img src={url} alt={title} />
                </div>
                <div className="card-about">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <p className="card-price">{price} ₽</p>
                <Button />
            </div>
        </>
    )
}

export default Card