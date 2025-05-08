import { useProductStyles } from "./producrt.style";

const ProductsComponent = ({data}:any) => {
    const productsFind=data?.find((e:any)=>e.tag=="Products")
    const classes=useProductStyles()

    return (
        <div className={`centered-container container mx-auto ${classes.container}`}>
            <h1 className={classes.header}>
                {productsFind?.tag}
            </h1>
            <div className={classes.textDiv}>
                <h1 className={classes.credit}>
                {productsFind?.heading}
                </h1>
                <p className={classes.creditText}>
                    {productsFind?.description}
                </p>
            </div>
            
        </div>
    );
}

export default ProductsComponent;
