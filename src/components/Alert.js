import styled from "styled-components";

function StkAlert (props) {
const Alert = styled.div `
    padding: 20px;
    background-color: #1177D1;
    color: white;
    margin-left: 25%;
    margin-left: 30%;
    flex: 1;
    width: 25%;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.5); 
    border: 1px solid #1177D1;
    text-align: center;
`;

const CloseButton = styled.div`
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        color: black;
    }
`;

    return (
        <Alert>
            <CloseButton>&times;</CloseButton>Anda Yakin Ingin Keluar Dari Halaman Ini? 
        </Alert>
    )

}

export default StkAlert