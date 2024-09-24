import styled from "styled-components";
import myImage from "./asset/gg.png";
import myImage1 from "./asset/g1.png";
import myImage2 from "./asset/g2.png";
import myImage3 from "./asset/g3.png";

function Dekstop() {
  const ColumnImage = styled.div `
    display: flex;
    margin-top: 2em;
    gap: 2em;
    padding: 2em;
  `;

  const ImageWrapper = styled.article `
    flex: 1;
  `;

  const Row = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  `;

  const Column = styled.div `
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
  `;

  const Text = styled.div `
    align-self: center;
    margin-bottom: 2em;
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

    const Image = styled.img `
        max-width: 8%;
        min-heigh: 8%;
        width: 100%;
        margin: auto;
        display: block;
    `;

    const Line = styled.hr `
        border: 3px solid orange;
        margin: auto;
        display: block;
        width: 5%;
        margin-bottom: 2em;
    `;

    const Teks = styled.i `
        align-self: center;
        font-size: 16px;
        margin-bottom: 2em;
    `;

    const Title = styled.div `
        align-self: center;
        font-size: 36px;
        color: orange;
    `;

  return (
    <Card>
      <ColumnImage>
        <Row>
          <Column>
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
          </Column>
          <Row>
            <ImageWrapper>
                <Image src={myImage1} />
                <Column>
                <Text>
                    Add 30% of Alumina to the mixture of Clay
                    </Text>
                </Column>
            </ImageWrapper>
            <ImageWrapper>
                <Img src={myImage2} />
                <Column>
                    <Text>
                    High temperature firing at 1350 C
                    </Text>
                </Column>
            </ImageWrapper>
            <ImageWrapper>
                    <Img src={myImage3} />
                    <Column>
                        <Text>
                        Achieve stronger porcelain
                        </Text>
                    </Column>
            </ImageWrapper>
            
            </Row>
        </Row>
          
          
         
          
      </ColumnImage>
    </Card>
  );
}

export default Dekstop;
