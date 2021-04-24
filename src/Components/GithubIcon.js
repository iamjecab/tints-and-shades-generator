import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";

const GithubIcon = () => {
    return (
        <>
            <Icon />
        </>
    );
};

const Icon = styled(AiFillGithub)`
    position: fixed;
    bottom: 30px;
    font-size: 2rem;
    right: 20px;
    color: white;
    background-color: red;
    border-radius: 50%;
`;

export default GithubIcon;
