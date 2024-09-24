import styled from "styled-components";
function TabelHeader(props) {
    const kolom = props.columns;
    const Thead = styled.thead `
        background: #1177D1;
        color: white;
        font-weight: normal;
    `;
    const TH = styled.th `
        padding: 1em;
    `;
    return (
        <Thead>
            <tr>
                {kolom.map(column => (
                    <TH key={column}>{column}</TH>
                ))}
            </tr>
        </Thead>
    );
}

export default TabelHeader