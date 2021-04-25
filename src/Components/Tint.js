import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdContentCopy } from "react-icons/md";
import { flexRow } from "../util/styles";

const Tint = ({ tint }) => {
    const { hex, weight } = tint;
    const [showClipboard, setShowClipboard] = useState(false);

    return (
        <>
            <Container>
                <BgColor
                    flexRow={flexRow}
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
                >
                    {showClipboard && <Clipboard />}
                </BgColor>
                <HexValue>{`#${hex}`}</HexValue>
            </Container>
        </>
    );
};

const Container = styled.div`
    position: relative;
`;

const BgColor = styled.div`
    height: 6rem;
    width: 6rem;
    background-color: #${({ bgColor }) => bgColor};
    ${({ flexRow }) => flexRow}
    border-radius: 1rem;
`;

const HexValue = styled.h3`
    text-align: center;
`;

const Clipboard = styled(MdContentCopy)`
    background-color: var(--white);
    font-size: 1.7rem;
    width: 2rem;
    height: 2rem;
    padding: 0.2rem;
    border-radius: 8px;
    color: var(--black);
`;

export default Tint;
