import styled from "styled-components";
import MyImage from "../components/Image";
import StkFlexRow from "./FlexRow";

function StkBanner(props) {
    const urlBackground = props.bg
    const BannerWrapper = styled.div `
        background-image: url(${urlBackground});
        width: 100%;
        background-size: cover;
        height: 500px;
        padding-top: 5em;
    `;
    const BannerTitle = styled.h1 `
        color: #FFFFFF;
    `;
    return (
        <BannerWrapper>
            <StkFlexRow children={
                <>
                    <BannerTitle>Mau Kuliah? Stikom Aja!</BannerTitle>
                    <MyImage width="300px" src="https://home.amikom.ac.id/media/2021/12/tallenta.jpg" />
                </>
            } justify="center" jarak="3em" align="center"/>
        </BannerWrapper>
    );
}

export default StkBanner