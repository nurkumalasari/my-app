import styled from "styled-components";

export const WrapperHeader = styled.section `
    display: flex;
    flex-direction: column;
    gap: 0;
    justify-content: flex-start;
`;

export const TopHeader = styled.div `
    background: #FBEEAC;
    display: flex;
    justify-content: space-between;
    padding: 1 em 12 em;
`;

export const Header = styled.header `
    background: #1177d1;
    display: flex;
    justify-content: space-between;
    padding: 1em 12 em;
`;

export default WrapperHeader;