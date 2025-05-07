import { useCallback, useEffect } from "react";
import Amazon from "../../../../assets/images/icons/amazon";
import Arrow from "../../../../assets/images/icons/arrow";
import { usePartnersModalStyles } from "./partners-modal.styles";
import { usePartnersModal } from "./action/partners-modal.query";

const PartnersModalComponent = ({ id, setId }: number | any) => {
    // const data = [
    //     {
    //         id: 1,
    //         partners: "Coca-Cola LTD",
    //         span: "Ac, venenatis",
    //         text: "Vehicula elit est, neque non mattis pharetra, urna lectus magnis. Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas est aliquet facilisis elit sit. Massa libero turpis facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo libero diam. ",
    //         icon: <Cola id={id} />,
    //         link: "https://www.coca-cola.com/az/az"
    //     },
    //     {
    //         id: 2,
    //         partners: "Amazon",
    //         span: "Metus, vel",
    //         text: "Vehicula elit est, neque non mattis pharetra, urna lectus magnis. Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas est aliquet facilisis elit sit. Massa libero turpis facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo libero diam. ",
    //         icon: <Amazon id={id} />
    //     },
    //     {
    //         id: 3,
    //         partners: "Google",
    //         span: "Platea curabitur",
    //         text: "Vehicula elit est, neque non mattis pharetra, urna lectus magnis. Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas est aliquet facilisis elit sit. Massa libero turpis facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo libero diam. ",
    //         icon: <Google id={id} />
    //     },
    //     {
    //         id: 4,
    //         partners: "Google",
    //         span: "Platea curabitur",
    //         text: "Vehicula elit est, neque non mattis pharetra, urna lectus magnis. Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas est aliquet facilisis elit sit. Massa libero turpis facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo libero diam. ",
    //         icon: <Google id={id} />
    //     },
    //     {
    //         id: 5,
    //         partners: "Google",
    //         span: "Platea curabitur",
    //         text: "Vehicula elit est, neque non mattis pharetra, urna lectus magnis. Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas est aliquet facilisis elit sit. Massa libero turpis facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo libero diam. ",
    //         icon: <Google id={id} />
    //     },
    //     {
    //         id: 6,
    //         partners: "Amazon",
    //         span: "Metus, vel",
    //         text: "Vehicula elit est, neque non mattis pharetra, urna lectus magnis. Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas est aliquet facilisis elit sit. Massa libero turpis facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo libero diam. ",
    //         icon: <Amazon id={id} />
    //     },
    // ]
    const{data}=usePartnersModal()

    const classes = usePartnersModalStyles()
    const modal = data?.filter((e: any) => e.id == id)

    useEffect(() => {
        if (id) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [id]);

    const closeModal = useCallback(() => {
        setId()
    }, [])
    console.log(modal,"modalk")

    return (
        <div className={id ? classes.container : ""}>
            {
                modal?.map((e:any,key:number) => {
                    return <div className={classes.modal} key={key}>
                        
                            <div className={classes.iconsDiv}>
                                <div>
                                    <img className={classes.partnersIcons} src={e.url} alt="" />
                                </div>
                                <div className={classes.modalHeaderDiv}>
                                    <p className={classes.partners}>
                                        {e.name}
                                    </p>
                                    <span className={classes.commerce}>
                                        E-commerce
                                    </span>
                                </div>
                            </div>
                            <div>
                                <p className={classes.texts}>
                                    {e.description}
                                </p>
                            </div>
                            <div className="row ">
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                    <button className={classes.partnersBtn}>
                                        Products
                                        <Arrow />
                                    </button>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                    <button onClick={() => closeModal()} className={classes.partnersCloseBtn}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>

                })
            }
        </div>
    );
}

export default PartnersModalComponent;
