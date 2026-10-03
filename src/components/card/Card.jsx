import { useState } from "react"
import Button from "../button/Button.jsx"
import Modal from "../modal/Modal.jsx"
// import Modal from "../modal/Modal.jsx"
// import openModal from '../../utils/cardAction.js'

function Card ({id, title, description, price, url}) {

    const [showModal, setShowModal] = useState(false)

    const handleBuyClick = () => {
        setShowModal(true)
    }
    const handleClose = () => {
        setShowModal(false)
    }

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
                <Button type="button" onClick={() => {handleBuyClick()}}/>
                {/* <Button type="button" onClick={() => { return <Modal className="active" title={title} />} */}
                {showModal && (
                    <Modal 
                    className="modal active"
                    title={title}
                    onClose={handleClose}/>
                    )}
            </div>
        </>
    )
}

export default Card