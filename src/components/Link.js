import styled from "styled-components";

function StkLink(props) {
    const href = props.href;
    const target = props.target;
    const label = props.label;

    const Link = styled.a `
        color: #1177D1;
        text-decoration: none;
        flex: 1;
        &:hover {
            text-decoration: underline;
        }
    `;

    return (
        <>
            <Link href={href} target={target}>{label}</Link>
        </>
    )
}

export default StkLink;