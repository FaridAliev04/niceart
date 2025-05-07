import { useProductsTitleStyles } from './products-title.styles';

const ProductsTitleComponent = () => {
    const classes=useProductsTitleStyles()
    return (
        <div className={classes.container}>
            <div>
                <h1 className={classes.productHeader}>
                Title for Products or Lorem Ipsum motto
                </h1>
            </div>
            <div className={classes.textsDiv}>
                <h1 className={classes.pulvinarHeader}>
                Lectus mauris pulvinar
                sit?
                </h1>
                <p className={classes.texts}>
                Vehicula elit est, neque non mattis pharetra, urna lectus magnis. Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas est aliquet facilisis elit sit. Massa libero turpis facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo libero diam. 
                </p>
            </div>
        </div>
    );
}

export default ProductsTitleComponent;
