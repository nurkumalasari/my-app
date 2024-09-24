import styled from "styled-components";

function StkSearch (props) {
const Search = styled.form`
    padding: 10px;
    font-size: 17px;
    width: 80%;
`;

const Input = styled.input `
    width: 20%;
    padding; 10px;
    border: 1px solid #1177D1;
    margin-left: 45%;
`;

const InputButton = styled.input `
    width: 5%;
    padding; 10px;
    border: 1px solid #1177D1;
    cursor: pointer;
    background: #1177D1;
    
`;
return (
    <Search>
       <Input type="text" placeholder="Search..."></Input> 
       <InputButton type="submit" placeholder="Search..."></InputButton> 
    </Search>
)
}

export default StkSearch