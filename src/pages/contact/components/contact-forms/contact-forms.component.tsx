import { Form, Input, Select, Row, Col } from "antd";
import ArrowRight from "../../../../assets/images/icons/arrow-right";
import { useContactFormsStyles } from "./contact-forms.style";
const ContactFormsComponent = () => {
    const { Option } = Select;
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    const classes = useContactFormsStyles()
    return (
        <div className={`${classes.container}`}>
            <div className={`centered-container container mx-auto ${classes.mainDiv}`}>
                <div className={classes.textDiv}>
                    <h1 className={classes.header}>
                        Have a project!
                        Let’s diascuss
                    </h1>
                    <p className={classes.text}>
                        Vehicula elit est, neque non mattis pharetra, urna lectus magnis. Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas est aliquet facilisis elit sit. Massa libero turpis facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo libero diam.
                    </p>
                </div>
                <div className={classes.form}>
                    <Form name="contact" layout="vertical">
                        <Row >
                            <Col xs={24} sm={12}>
                            </Col>
                            <Col xs={24} sm={12}>
                                <Form.Item
                                    name="email"
                                    label={<span className={classes.label}>E-poçt</span>}
                                    rules={[
                                        { required: true, message: "E-poçt daxil edin" },
                                        { type: "email", message: "Düzgün e-poçt yazın" }
                                    ]}
                                >
                                    <Input className={classes.inp} placeholder="example@gmail.com" type="email" />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={11}>
                                <Form.Item
                                    name="number"
                                    label={<span className={classes.label}>Əlaqə nömrəsi</span>}
                                    rules={[
                                        { required: true, message: "Əlaqə nömrəsi daxil edin" }
                                    ]}
                                >
                                    <Input className={classes.inp} placeholder="+994 00 000 00 00" type="tel" />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={1}></Col>
                            <Col xs={24} sm={12}>
                                <Form.Item
                                    name="section"
                                    label={<span className={classes.label}>Mövzu</span>}
                                    rules={[
                                        { required: true, message: "Mövzu seçin" }
                                    ]}
                                >
                                    <Select placeholder="Mövzu seçib" onChange={handleChange}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="yiminghe">Yiminghe</Option>
                                    </Select>
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={24}>
                                <Form.Item
                                    name="text"
                                    label={<span className={classes.label}>Mesajınız</span>}
                                    rules={[
                                        { required: true, message: "Mesajınızı daxil edin" }
                                    ]}
                                >
                                    <Input className={classes.inp} placeholder="Mesajınızı daxil edin." />
                                </Form.Item>
                            </Col>

                            <Col xs={24}>
                                <Form.Item>
                                    <button type="submit" className={classes.submitBtn}>
                                        Submit <ArrowRight />
                                    </button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </div>


            </div>
        </div>
    );
}

export default ContactFormsComponent;
