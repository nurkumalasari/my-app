import styled from "styled-components";

function MyComponent(props) {
  const is_primary = props.isprimary;
  const text = props.txt;
  const Button = styled.button`
    background: ${props => props.primary ? "#1177D1" : "white"};
    color: ${ is_primary ? "white" : "black"};
    padding: 1em;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-family: montsserat;
    &:hover {
      box-shadow: 0 0 10px 10px #1177D1;
      color: #FFFFFF;
    }
    @media (max-width: 768px) {
      background: #1177D1;
    }
  `;
  
  const Hover = styled.button `
    border: none;
    color: black;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    border: 2px solid #1177D1;
    font-family: montsserat;
    &:hover {
      background-color: #1177D1;
      color: white;
    }
  `;

  const Bg = styled.button `
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    background-color: #1177D1;
    font-family: montsserat;
  `;

  return (
    <>
      <Button primary>{text}Click Me</Button>
      <Hover>Hover</Hover>
      <Bg>Background</Bg>
    </>
  )
}

export default MyComponent;