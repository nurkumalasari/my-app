import styled from "styled-components";

function StkFlexRow(props) {
    const gap = props.gap;
    const padding = props.padding;

    const FlexRow = styled.div `
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: ${ gap === undefined ? "0" : gap };
        padding: ${ padding === undefined ? "0" : padding};
    `;

    return (
        <>
            <FlexRow>{props.children}</FlexRow>
        </>
    );
}

export default StkFlexRow;