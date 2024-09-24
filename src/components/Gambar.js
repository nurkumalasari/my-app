import MyImage from "../components/Image";
import StkFlexRow from "./FlexRow";
import styled from "styled-components";

function StkGambar(props) {
    const GambarWrapper = styled.div `
        margin-top: -10em;
        padding: 0 35em;
        margin-bottom: 3em;
    `;

    const GambarItem = styled.div `
        background-color: #FFFFFF;
        border-radius: 5px;
        flex: 1;
        box-shadow: 0 0 10px 0 rgba(0,0,0,.5);
        text-align: center;
    `;

    const GambarPadding = styled.div `
        background-color: #FFFFFF;
        border-radius: 5px;
        flex: 1;
        padding: 1em;
        box-shadow: 0 0 10px 0 rgba(0,0,0,.5);
        text-align: center;
    `;

    const GambarHeader = styled.div `
        background-color: #FFFFFF;
        border-radius: 5px;
        flex: 1;
        padding: 25px 0px;
        box-shadow: 0 0 10px 0 rgba(0,0,0,.5);
        text-align: center;
    `;
   
    return (
        <GambarWrapper>
            <StkFlexRow children={
                <>
                    <GambarItem>
                        <MyImage src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                        <h2>Image 1</h2>
                         
                    </GambarItem>
                </>
            }/>
            <br/>
            <StkFlexRow children={
                <>
                    <GambarPadding>
                        <MyImage src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></MyImage>
                        <h2>Image 2</h2>
                    </GambarPadding>
                </>
            } />
            <br/>
            <StkFlexRow children={
                <>
                    <GambarHeader>
                        <MyImage src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></MyImage>
                        <h2>Image 3</h2>
                    </GambarHeader>
                </>
            } />
        </GambarWrapper>
        
    );
}

export default StkGambar