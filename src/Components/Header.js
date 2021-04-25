import React from "react";
import styled from "styled-components";
import GithubIcon from "./GithubIcon";
import ToggleBtn from "./ToggleBtn";

const Header = ({ setTheme, theme }) => {
    return (
        <>
            <Container>
                <GithubIcon />
                <Title>Generate Color</Title>
                <ToggleBtn setTheme={setTheme} theme={theme} />
            </Container>
        </>
    );
};

const Container = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const Title = styled.h1`
    font-weight: 500;
    font-size: 1.5rem;
    @media (min-width: 620px) {
        font-size: 2rem;
    }
`;

export default Header;
