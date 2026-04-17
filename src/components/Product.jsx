import '../css/components/Product.css';
import Button from '../components/Button';
import ImgProduct from '../assets/images/illustration-intro.svg';

const Product = () => {
    return (  
        <div className="container__product">
            <div className="description__product">
                <h1>
                    Bring everyone together to build better products.
                </h1>
                <p>
                    Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
                </p>
                <Button />
            </div>
            <div className="img__product">
                <img src={ImgProduct} alt="ilustrationIntro" />
            </div>
        </div>
    );
}
 
export default Product;