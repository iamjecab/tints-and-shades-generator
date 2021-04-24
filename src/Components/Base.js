import React from "react";
import styled from "styled-components";

const Base = ({ base }) => {
    const { type, hex } = base;
    return (
        <>
            <Wrapper>
                <Title>{type}</Title>
                <BgColor bg={hex}></BgColor>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div``;

const Title = styled.h4``;

const BgColor = styled.div`
    background-color: #${({ bg }) => bg};
    width: 100px;
    height: 100px;
`;

export default Base;
