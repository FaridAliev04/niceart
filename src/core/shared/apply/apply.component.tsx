import { useCallback, useState } from "react";
import { Slider, InputNumber, Input, Checkbox } from 'antd';
import { useApplyStyles } from "./apply.styles";
import type { CheckboxProps } from 'antd';
import ArrowRight from "../../../assets/images/icons/arrow-right";
import { useLeads } from "../../layouts/public/action/leads.query";

const ApplyComponent = () => {
    const { data } = useLeads()
    console.log(data, "applu")
    const [value, setValue] = useState(5000);
    const [time, setTime] = useState(12);
    const [percent, setPercent] = useState(10);
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [monthlyPayment, setMonthlyPayment] = useState(439.58);
    const classes = useApplyStyles();

    const applyFind = data?.find((e: any) => e.tag == "Apply to loan")

    const onChange = useCallback((newValue: number | any) => {
        setValue(newValue);
        calculateMonthlyPayment(newValue, time, percent);
    }, [time, percent]);

    const onChangeTime = useCallback((newValue: number | any) => {
        setTime(newValue);
        calculateMonthlyPayment(value, newValue, percent);
    }, [value, percent]);

    const onChangePercent = useCallback((newValue: number | any) => {
        setPercent(newValue);
        calculateMonthlyPayment(value, time, newValue);
    }, [value, time]);

    const onChangeCheckBox: CheckboxProps['onChange'] = (e) => {
        setCheckboxChecked(e.target.checked);
    };

    const calculateMonthlyPayment = useCallback((loanAmount: number | any, months: number | any, interestRate: number | any) => {
        const monthlyRate = interestRate / 100 / 12;
        const totalMonths = months;

        if (monthlyRate === 0) {
            setMonthlyPayment(loanAmount / totalMonths);
        } else {
            const payment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
            setMonthlyPayment(payment);
        }
    }, [monthlyPayment])

    return (
        <div className={`centered-container container mx-auto ${classes.container}`}>
            <div>
                <div className={classes.texts}>
                    <p className={classes.header}>
                        {applyFind?.tag}
                    </p>
                    <h1 className={classes.textHeader}>
                        {applyFind?.heading}
                    </h1>
                    <p className={classes.text}>
                        Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea turpis non. Tellus odio eu ante tincidunt vivamus nunc nibh arcu, augue.
                    </p>
                </div>
            </div>

            <div className={classes.backgroundDiv}></div>
            <div className={`${classes.applyMainDiv}`}>
                <div className={`${classes.applyDiv}`}>
                    <div className={classes.inputsDiv} style={{ maxWidth: 300 }}>
                        <label className={classes.label}>Kreditin məbləği</label>

                        <div className={classes.inpDiv}>
                            <InputNumber
                                min={1000}
                                max={10000}
                                value={value}
                                onChange={onChange}
                                bordered={false}
                                style={{ width: '100%' }}
                            />
                            <span style={{ marginLeft: 8 }}>AZN</span>
                        </div>

                        <Slider
                            min={1000}
                            max={10000}
                            onChange={onChange}
                            value={typeof value === 'number' ? value : 0}
                            trackStyle={{ backgroundColor: '#486d1a' }}
                            handleStyle={{
                                borderColor: '#486d1a',
                                backgroundColor: '#fff',
                            }}
                        />
                    </div>

                    <div className={classes.inputsDiv} style={{ maxWidth: 300 }}>
                        <label className={classes.label}>Kreditin müddəti</label>

                        <div className={classes.inpDiv}>
                            <InputNumber
                                min={1}
                                max={120}
                                value={time}
                                onChange={onChangeTime}
                                bordered={false}
                                style={{ width: '100%' }}
                            />
                            <span style={{ marginLeft: 8 }}>Ay</span>
                        </div>

                        <Slider
                            min={1}
                            max={120}
                            onChange={onChangeTime}
                            value={typeof time === 'number' ? time : 0}
                            trackStyle={{ backgroundColor: '#486d1a' }}
                            handleStyle={{
                                borderColor: '#486d1a',
                                backgroundColor: '#fff',
                            }}
                        />
                    </div>

                    <div className={classes.inputsDiv} style={{ maxWidth: 300 }}>
                        <label className={classes.label}>Faiz dərəcəsi</label>

                        <div className={classes.inpDiv}>
                            <InputNumber
                                min={1}
                                max={30}
                                value={percent}
                                onChange={onChangePercent}
                                bordered={false}
                                style={{ width: '100%' }}
                            />
                            <span style={{ marginLeft: 8 }}>%</span>
                        </div>

                        <Slider
                            min={1}
                            max={30}
                            onChange={onChangePercent}
                            value={typeof percent === 'number' ? percent : 0}
                            trackStyle={{ backgroundColor: '#486d1a' }}
                            handleStyle={{
                                borderColor: '#486d1a',
                                backgroundColor: '#fff',
                            }}
                        />
                    </div>

                </div>

                <div className={classes.monthlyDiv}>
                    <p className={classes.monthly}>
                        Aylıq ödəniş
                    </p>
                    <span className={classes.span}>
                        {monthlyPayment.toFixed(2)} ₼
                    </span>
                </div>

                <div className={classes.personDiv}>
                    <div className={classes.personMainDiv}>
                        <label className={classes.label} htmlFor="">FIN code</label>
                        <Input placeholder="A1S9SGN" />
                    </div>
                    <div className={classes.personMainDiv}>
                        <label className={classes.label} htmlFor="">Number</label>
                        <Input placeholder="+994-XXX-XX-XX" />
                    </div>
                </div>

                <div className={classes.btnDiv}>
                    <Checkbox className={classes.check} onChange={onChangeCheckBox}>
                        AKB RAZILIQ vəriləsi üçün icazə
                    </Checkbox>

                    <div>
                        <button className={classes.applyBtn}>
                            Müraciət et
                            <ArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplyComponent;
