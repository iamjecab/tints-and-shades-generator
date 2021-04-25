import React, { useState, useEffect, useRef } from "react";
import GlobalStyles from "./Components/GlobalStyles";
import Values from "values.js";
import Header from "./Components/Header";
import styled from "styled-components";
import { flexColumn, flexRow } from "./util/styles";
import ErrorComponent from "./Components/Error";

import Percentage from "./Components/Percentage";
import Shade from "./Components/Shade";
import Tint from "./Components/Tint";

const App = () => {
    const [error, setError] = useState(false);
    const [shades, setShades] = useState([]);
    const [tints, setTints] = useState([]);
    const [input, setInput] = useState("");
    const [theme, setTheme] = useState("black");

    const submitColor = (e) => {
        e.preventDefault();
        setError(false);
        try {
            const data = new Values(input).all(5);
            const colors = data.sort((a, b) => a.weight - b.weight);
            setShades(colors.filter((colorObj) => colorObj.type === "shade"));
            setTints(colors.filter((colorObj) => colorObj.type === "tint"));
        } catch (error) {
            setError(true);
            console.log(error);
        }
    };

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            if (error) {
                setError(false);
            }
        }, 2500);
        return () => {
            clearTimeout(timeOut);
        };
    }, [error]);

    return (
        <>
            <GlobalStyles theme={theme} />
            <AppContainer flexColumn={flexColumn}>
                <Header setTheme={setTheme} theme={theme} />
                <Form
                    flexColumn={flexColumn}
                    onSubmit={(e) => {
                        e.preventDefault();
                        submitColor(e);
                    }}
                >
                    <Label>Enter color here</Label>
                    <Input
                        ref={inputRef}
                        placeholder="#222222"
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
                {tints.length !== 0 && (
                    <Result flexRow={flexRow}>
                        <PercentageList flexColumn={flexColumn}>
                            <Title>%</Title>
                            {shades.map((element, index) => {
                                return <Percentage key={index} {...element} />;
                            })}
                        </PercentageList>
                        <ShadeList flexColumn={flexColumn}>
                            <Title>Shade</Title>
                            {shades.map((shade, index) => {
                                return <Shade key={index} shade={shade} />;
                            })}
                        </ShadeList>
                        <TintList flexColumn={flexColumn}>
                            <Title>Tint</Title>
                            {tints.map((tint, index) => {
                                return <Tint key={index} tint={tint} />;
                            })}
                        </TintList>
                    </Result>
                )}
            </AppContainer>
        </>
    );
};

const AppContainer = styled.main`
    ${({ flexColumn }) => flexColumn}
    padding: 1rem;
    height: 100%;
`;

const Form = styled.form`
    ${({ flexColumn }) => flexColumn}
    & * {
        margin: 0.4rem;
    }
`;

const Label = styled.label``;

const Input = styled.input`
    border: none;
    border-bottom: 2px solid var(--black);
    outline: none;
    padding: 0.5rem 1.3rem;
    text-align: center;
    background-color: var(--white);
    color: var(--black);
    /* ::placeholder {
        color: var(--black);
    } */
`;

const BtnContainer = styled.div``;

const Btn = styled.button`
    width: 10rem;
    padding: 0.2rem 0;
    border: 2px solid var(--black);
    outline: none;
    background-color: var(--white);
    border-radius: 1rem;
    font-size: 1rem;
    cursor: pointer;
    color: inherit;
    &:hover {
        background-color: var(--black);
        color: var(--white);
    }
`;

const Result = styled.section`
    ${({ flexRow }) => flexRow}
    justify-content: space-around;
    width: 100%;
    align-items: flex-start;
`;
const Title = styled.h3`
    text-align: center;
`;

const PercentageList = styled.section`
    width: 33%;
    ${({ flexColumn }) => flexColumn}
`;

const ShadeList = styled.section`
    width: 33%;
    ${({ flexColumn }) => flexColumn}
`;

const TintList = styled.section`
    width: 33%;
    ${({ flexColumn }) => flexColumn}
`;

export default App;
