import styled from "styled-components";
import myImage from "./asset/gg.png";
import myImage1 from "./asset/g1.png";
import myImage2 from "./asset/g2.png";
import myImage3 from "./asset/g3.png";

function Ponsel() {
    const ColumnImage = styled.div `
        flex-direction: column;
        display: flex;
        margin-top: 2em;
        gap: 2em;
        padding: 2em;
    `;

    const ImageWrapper = styled.article `
        flex: 1;
    `;

    const Text = styled.div `
        align-self: center;
        font-size: 16px;
    `;

    const Teks = styled.i `
        align-self: center;
        font-size: 16px;
    `;

    const Title = styled.div `
        align-self: center;
        font-size: 36px;
        color: orange;
    `;

    const Card = styled.section `
        padding: 1rem;
        background: hsl(var(--clr-white));
    `;

    const Img = styled.img `
        max-width: 20%;
        min-height: 20%;
        width: 100%;
        margin: auto;
        display: block;
    `;

    const Line = styled.hr `
        border: 3px solid orange;
        margin: auto;
        display: block;
        width: 5%;
    `;

    const Arrow = styled.p `
        border: black;
        margin: auto;
        display: block;
        padding: 3px;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
    `;
    return (
        <Card>
      <ColumnImage>
        
            <ImageWrapper>
              <Img src={myImage} />
            </ImageWrapper>
            <Title>
              QUALITY
            </Title>
            <Line/>
            <Teks>
              More Alumina, Stronger Porcelain
            </Teks>
            <ImageWrapper>
                <Img src={myImage1} />
            </ImageWrapper>
            <Text>
              Add 30% of Alumina to the mixture of Clay
            </Text>
            <Arrow className="arrow down">panah</Arrow>
            <ImageWrapper>
                <Img src={myImage2} />
            </ImageWrapper>
          
            <Text>
              High temperature firing at 1350 C
            </Text>
         
            <ImageWrapper>
                <Img src={myImage3} />
            </ImageWrapper>
         
            <Text>
              Achieve stronger porcelain
            </Text>
          
      </ColumnImage>
    </Card>
    );
}

export default Ponsel;

// function App() {
//   const Title = styled.h1 `
//     font-size: 1.5em;
//     text-align: center;
//     color: palevioletred;
//   `;
//   const Wrapper = styled.section `
//     padding: 4em;
//     background: #333333;
//   `;

//   const Button = styled.button `
//     background: blue;
//     color: #333333;
//     margin: auto; 
//     display: block;
//     padding: 1em;
//     border-radius: 10px;
//     border: none;
//     &:hover {
//       background: #333333;
//       color: blue;
//       box-shadow: 0 0 10px 10px blue;    
//     }
//   `;

//   return (
//     <div className='App'>
//       <Wrapper class="test">
//         <Title>
//           Hello World
//         </Title>
//         <Button>Button</Button>
//       </Wrapper>
//     </div>
//   );
// }

// export default App;