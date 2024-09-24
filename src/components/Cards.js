import MyImage from "../components/Image";
import StkFlexRow from "./FlexRow";
import styled from "styled-components";

function StkCards(props) {
    const CardWrapper = styled.div `
        margin-top: -10em;
        padding: 0 35em;
        margin-bottom: 3em;
    `;

    const CardItem = styled.div `
        background-color: #FFFFFF;
        border-radius: 20px;
        padding: 2em;
        flex: 1;
        box-shadow: 0 0 10px 0 rgba(0,0,0,.5);
        text-align: center;
    `;
   
    return (
        <CardWrapper>
            <StkFlexRow children={
                <>
                    <CardItem>
                        <MyImage src="https://learn.stikombanyuwangi.ac.id/pluginfile.php/1/theme_moove/logo/1659668827/maskot.png" width="30%"/>
                        <h2>CARD</h2>
                        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p> 
                    </CardItem>
                    {/* <CardItem>
                        <MyImage src="https://home.amikom.ac.id/media/2021/02/icon-bayar-kuliah.png"/>
                        <h2>Kuliah di STIKOM Tidak Mahal </h2>
                        <p>Cek biaya perkuliahan disini</p>
                        <StkLink color="#000000" tujuan ="/biaya-kuliah" label="Info Biaya Kuliah"/> 
                    </CardItem>
                    <CardItem>
                        <MyImage src="https://home.amikom.ac.id/media/2021/02/icon-daftar-kuliah.png"/>
                        <h2>Sudah Siap Daftar Kuliah di STIKOM?</h2>
                        <p>Klik tombol di bawah ini untuk melakukan pendaftaran online</p>
                        <StkLink color="#000000" tujuan ="/ppdb" label="PMB"/> 
                    </CardItem> */}
                </>
            } justify="center" jarak="3em" align="center"/>
        </CardWrapper>
    );
}

export default StkCards