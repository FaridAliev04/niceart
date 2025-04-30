import { useProductStyles } from "./producrt.style";

const ProductsComponent = () => {
    const classes=useProductStyles()
    return (
        <div className={classes.container}>
            <h1 className={classes.header}>
                Products
            </h1>
            <div className={classes.textDiv}>
                <h1 className={classes.credit}>
                Daşınmaz əmlak krediti
                </h1>
                <p className={classes.creditText}>
                    Quisque bibendum adipiscing sem massa auctor nulla donec mi integer. Suspendisse eget convallis magna viverra amet. Ut quam scelerisque massa morbi ac pharetra. Sit at elit non et diam. Quam a id egestas elit. Posuere cursus accumsan urna viverra. Sit egestas et convallis donec risus sapien enim. Gravida praesent adipiscin
                </p>
            </div>
            
        </div>
    );
}

export default ProductsComponent;
