import "../ComponentCss/Product.css";
function Product({title,price}){
    return(
        <div className="Product">
            <h1>Title:{title}</h1>
            <h1>Price:{price}</h1>
        </div>
    );
};
export default Product;