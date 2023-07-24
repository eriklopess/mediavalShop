import "./initialPageStyles.css";

function initialPage () {
    return (
        <div className="carrossel">
            <div></div>
            <h1 className="txt-car">Destaques</h1>
            <ul className="img-car">
                <li><img className="img1" src="../../../public/images/carrossel-images/carrossel-adaga.jpg" alt="" /></li>
                <li><img className="img2" src="../../../public/images/carrossel-images/carrossel-capacete.jpg" alt="" /></li>
                <li><img className="img3" src="../../../public/images/carrossel-images/carrossel-espada.jpg" alt="" /></li>
            </ul>
        </div>
    )
}

export default initialPage