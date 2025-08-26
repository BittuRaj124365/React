import Product from "./Product";
function ProductTab(){
    return(
        <>
            <Product title="cartoon" price={200}/>
            <Product title="emoji" price={200}/>
            <Product title="box" price={123}/>
        </>
    )
}
export default ProductTab;