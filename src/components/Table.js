import styled from "styled-components";
import TabelHeader from "./TableHeader";
import TabelBody from "./TableBody";

function StkTable(props){

    const tableData = props.data;
    const tableHeaderColumn = Object.keys(tableData[0]);
    const TableWrapper = styled.div `
        margin: 0px 20%;
        font-family: montserrat;
        color: black;
        border: 1px solid #1177D1;
        border-radius: 5px;
        flex: 1;
        padding: 1em;
        box-shadow: 0 0 10px 0 rgba(0,0,0,.5);
    `;
    return (
        <TableWrapper>
            <table>
                <TabelHeader columns={tableHeaderColumn}/>
                <TabelBody data={tableData} columns={tableHeaderColumn} />
            </table>
        </TableWrapper>
    );
}

export default StkTable