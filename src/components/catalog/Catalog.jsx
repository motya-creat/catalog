import data from "../../data/product.json"
import Card from '../card/Card.jsx'

function Catalog() {
    return (
        <>
            <div className="catalog-container">
                <h1>КАТАЛОГ ХУДИ</h1>
                <div className="container-wrap">
                    {
                        data.map(item =>
                            <Card
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                url={item.url}
                                price={item.price}
                            />)
                    }
                </div>
            </div>
        </>
    )
}
export default Catalog