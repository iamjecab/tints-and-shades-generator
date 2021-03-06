import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";

const GithubIcon = () => {
    return (
        <>
            <Link
                href="https://github.com/vicky-yadav/tints-and-shades-generator"
                target="_blank"
            >
                <Icon />
            </Link>
        </>
    );
};

const Link = styled.a``;

const Icon = styled(AiFillGithub)`
    font-size: 1.6rem;
    color: var(--white);
    background-color: var(--black);
    border-radius: 50%;
    @media (min-width: 620px) {
        font-size: 2rem;
    }
`;

export default GithubIcon;
