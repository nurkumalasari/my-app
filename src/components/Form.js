import styled from "styled-components";
import MyComponent from "./Button";

function StkForm (props) {
const Form = styled.form`
    background-color: #FFFFFF;
    border-radius: 20px;
    border: 1px solid #1177D1;
    padding: 2em;
    margin-left: 30%;
    flex: 1;
    width: 30%;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.5);  
`;

const Label = styled.label `
    display: block;
    margin-bottom; 5px;
    font-weight: bold;
    color: ${props => props.primary ? "#1177D1" : "black"};
`;

const Input = styled.input `
    width: 100%;
    padding; 10px;
    border: 1px solid #1177D1;
    border-radius: 5px;
`;

    return (
        <Form>
            <Label>Username:</Label>
            <Input type="text"></Input>
            <Label>Password:</Label>
            <Input type="password"></Input>
            <MyComponent>Submit</MyComponent>
        </Form>
    );
}

export default StkForm