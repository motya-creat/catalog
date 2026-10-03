function Modal({onClose, className, title}) {

    return (
        <>
            <div className={className}>
                Ваш товар: {title} был куплен!
                <button onClick={onClose}>Закрыть</button>
            </div>
        </>
    )
}

export default Modal