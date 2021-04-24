import React, { useState } from "react";
import styled from "styled-components";
import { FaClipboard } from "react-icons/fa";

const Shade = ({ shade }) => {
    const [showClipboard, setShowClipboard] = useState(false);
    const { hex } = shade;

    return (
        <>
            <Container>
                <BgColor
                    bgColor={hex}
                    onMouseOver={() => {
                        setShowClipboard(true);
                    }}
                    onMouseLeave={() => {
                        setShowClipboard(false);
                    }}
                    onClick={() => {
                        navigator.clipboard.writeText(`#${hex}`);
                    }}
                ></BgColor>
                <HexValue>{`#${hex}`}</HexValue>
                {showClipboard && <Clipboard />}
            </Container>
        </>
    );
};

const Container = styled.div``;

const BgColor = styled.div`
    height: 100px;
    width: 100px;
    background-color: #${({ bgColor }) => bgColor};
`;

const HexValue = styled.h3``;

const Clipboard = styled(FaClipboard)`
    background-color: red;
`;

export default Shade;
