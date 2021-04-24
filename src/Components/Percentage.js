import React from "react";
import styled from "styled-components";

const Percentage = ({ weight }) => {
    return (
        <>
            <Container>
                <Value>{weight}</Value>
            </Container>
        </>
    );
};

const Container = styled.div`
    height: 122px;
`;

const Value = styled.h3`
    padding: 0;
`;

export default Percentage;
