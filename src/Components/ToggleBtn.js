import React from "react";
import styled from "styled-components";

const ToggleBtn = ({ setTheme, theme }) => {
    const changeTheme = () => {
        if (theme === "white") {
            setTheme("black");
        } else {
            setTheme("white");
        }
    };
    return (
        <>
            <Btn onClick={changeTheme} theme={theme}>
                <Indicator></Indicator>
            </Btn>
        </>
    );
};

const Btn = styled.button`
    height: 1.4rem;
    width: 2.6rem;
    border-radius: 2rem;
    background-color: var(--black);
    display: flex;
    align-items: center;
    padding: 5px;
    justify-content: ${({ theme }) =>
        theme === "white" ? "flex-end" : "flex: start"};
    border: 2px solid var(--black);
    outline: none;
    @media (min-width: 620px) {
        height: 1.6rem;
        width: 3rem;
    }
`;

const Indicator = styled.span`
    background-color: var(--white);
    display: inline-block;
    border-radius: 50%;
    width: 1rem;
    height: 15px;
`;

export default ToggleBtn;
