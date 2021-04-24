import React from "react";
import styled from "styled-components";

const ToggleBtn = () => {
    return (
        <>
            <Btn>
                <Indicator></Indicator>
            </Btn>
        </>
    );
};

const Btn = styled.button`
    position: fixed;
    bottom: 50px;
    left: 20px;
    width: 70px;
    height: 30px;
    border-radius: 50px;
    background-color: black;
    display: flex;
    align-items: center;
    padding: 5px;
    justify-content: flex-end;
    border: 2px solid black;
    outline: none;
`;

const Indicator = styled.span`
    background-color: white;
    display: inline-block;
    border-radius: 50%;
    width: 15px;
    height: 15px;
`;

export default ToggleBtn;
