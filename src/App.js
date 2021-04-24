import React, { useState } from "react";
import GlobalStyles from "./Components/GlobalStyles";
import Values from "values.js";
import Heading from "./Components/Heading";
import styled from "styled-components";
import Base from "./Components/Base";
import { flexColumn, flexRow } from "./util/styles";
import ErrorComponent from "./Components/Error";
import ToggleBtn from "./Components/ToggleBtn";
import GithubIcon from "./Components/GithubIcon";
import Percentage from "./Components/Percentage";
import Shade from "./Components/Shade";
import Tint from "./Components/Tint";

const App = () => {
    const [error, setError] = useState(false);
    const [shades, setShades] = useState([]);
    const [tints, setTints] = useState([]);
    const [input, setInput] = useState("");
    const [theme, setTheme] = useState("white");
    const [base, setBase] = useState({});
    console.log(base);

    const submitColor = (e) => {
        e.preventDefault();
        setError(false);
        try {
            const data = new Values(input).all(5);
            setShades(data.filter((colorObj) => colorObj.type === "shade"));
            setTints(data.filter((colorObj) => colorObj.type === "tint"));
            setBase(data[20]);
        } catch (error) {
            setError(true);
            console.log(error);
        }
    };

    return (
        <>
            <GlobalStyles />
            <AppContainer flexColumn={flexColumn}>
                <Heading />
                <Form
                    flexColumn={flexColumn}
                    onSubmit={(e) => {
                        e.preventDefault();
                        submitColor(e);
                    }}
                >
                    <Label>Enter color here</Label>
                    <Input
                        type="text"
                        value={input}
                        onChange={(e) => {
                            setInput((oldState) => e.target.value);
                        }}
                    ></Input>
                    <BtnContainer
                        onClick={(e) => {
                            submitColor(e);
                        }}
                    >
                        <Btn type="submit">Get Colors</Btn>
                    </BtnContainer>
                </Form>
                {error ? <ErrorComponent /> : null}
                <Base base={base} />

                <Result flexRow={flexRow}>
                    <PercentageList>
                        <Title>%</Title>
                        {shades.map((element, index) => {
                            return <Percentage key={index} {...element} />;
                        })}
                    </PercentageList>
                    <ShadeList>
                        <Title>Shade</Title>
                        {shades.map((shade, index) => {
                            return <Shade key={index} shade={shade} />;
                        })}
                    </ShadeList>
                    <TintList>
                        <Title>Tint</Title>
                        {tints.map((tint, index) => {
                            return <Tint key={index} tint={tint} />;
                        })}
                    </TintList>
                </Result>

                <ToggleBtn />
                <GithubIcon />
            </AppContainer>
        </>
    );
};

const AppContainer = styled.main`
    ${({ flexColumn }) => flexColumn}
    padding: 1rem;
`;

const Form = styled.form`
    ${({ flexColumn }) => flexColumn}
    & * {
        margin: 0.4rem;
    }
`;

const Label = styled.label``;

const Input = styled.input``;

const BtnContainer = styled.div``;

const Btn = styled.button``;

const Result = styled.section`
    ${({ flexRow }) => flexRow}
    justify-content: space-around;
    width: 100%;
    align-items: flex-start;
`;
const Title = styled.h3``;

const PercentageList = styled.section``;

const ShadeList = styled.section``;

const TintList = styled.section``;

export default App;
