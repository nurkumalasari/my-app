import styled from "styled-components";

function TabelBody(props){
    const data = props.data;
    const kolom = props.columns;
    const TD = styled.td `
        padding: 1em;
        text-align: left;
        border: 1px solid #1177D1;
        border-collapse: collapse;
    `;

    return (
        <tbody>
            {data.map(dt => (
                <tr key={dt.id}>
                    {kolom.map(column => (
                        <TD key={column}>
                            {typeof dt[column] === 'object' ? (
                                Object.values(dt[column]).join(', ')
                            ) : (
                                dt[column]
                            )}
                        </TD>
                    ))}
                </tr>
            ))}
        </tbody>
    );
}

export default TabelBody