import React from "react";
import styled from "styled-components";

const ErrorComponent = () => {
    return (
        <>
            <Message>Please enter valid hex code</Message>
        </>
    );
};

const Message = styled.h3``;

export default ErrorComponent;
