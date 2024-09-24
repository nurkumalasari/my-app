import WrapperHeader from "./components/Header";
import { TopHeader } from "./components/Header";
import { Header } from "./components/Header";
import StkFlexRow from "./components/FlexRow";
import StkLink from "./components/Link";
import StkList from "./components/ListWrapper";
import StkListItem from "./components/List";
import StkBanner from "./components/Banner";
import StkCards from "./components/Cards";
import StkTable from "./components/Table";
import StkGambar from "./components/Gambar";
import MyComponent from "./components/Button";
import StkForm from "./components/Form";
import StkSearch from "./components/Search";
import MyImage from "./components/Image";
import StkAlert from "./components/Alert";

const DataMahasiswa = [
  {
    No: 1,
    Nama: 'Nur Kumala Sari',
    Telp: '081123456789',
    Email: 'nurkumalasari@email.com',
    Alamat: {
      street: 'Jl. Raya Srono',
      city: 'Banyuwangi',
    },
  },
  {
    No: 2,
    Nama: 'Ratna Dewi Safitri',
    Telp: '082123456789',
    Email: 'ratna@email.com',
    Alamat: {
      street: 'Tempeh Lor',
      city: 'Lumajang',
    },
  },
  {
    No: 3,
    Nama: 'Rizky Nurwinda',
    Telp: '085123456789',
    Email: 'kiki@email.com',
    Alamat: {
      street: 'Dusun Peh Kulon',
      city: 'Kediri Kota',
    },
  },
  {
    No: 4,
    Nama: 'Sasti Widiyasari',
    Telp: '087123456789',
    Email: 'sasti@email.com',
    Alamat: {
      street: 'Jl. Mastrip 4',
      city: 'Jember',
    },
  },
  {
    No: 5,
    Nama: 'Ruri Asmi',
    Telp: '089123456789',
    Email: 'ruri@email.com',
    Alamat: {
      street: 'Jl. Raya Probolinggo',
      city: 'Probolinggo',
    },
  },
];

// const DataDropDown = [
//   {
//     value: "option1",
//     label: "Option 1"
//   },
//   {
//     value: "option2",
//     label: "Option 2"
//   },
//   {
//     value: "option3",
//     label: "Option 3"
//   },
//   {
//     value: "option4",
//     label: "Option 4"
//   },
// ];

  function App() {
    return (
      <div className="App">
        <WrapperHeader>
          <TopHeader>
            <StkFlexRow children={
              <>
                <MyImage width={100} src="https://www.stikombanyuwangi.ac.id/img/logo.png"/>
                {/* <StkLink href="tel:(0333) 123456" label="(0333) 123456" />
                <StkLink href="https://www.stikombanyuwangi.ac.id/" label="www.stikombanyuwangi.ac.id"></StkLink> */}
              </>
            } />
            <StkFlexRow gap={"1em"} children={
              <>
                <StkLink href="english" label="Beranda"/>
                <StkLink href="/faq" label="Berita"/>
                <StkLink href="berita-utama" label="Mahasiswa"/>
                <StkLink href="/info-kampus" label="Akademik"/>
                <StkLink href="/donwload" label="Kontak"/>
                <StkLink href="/kontak" label="Pendaftaran"/>
              </>
            } 
            />
          </TopHeader>
          <Header>
            <MyImage width={150} src="https://www.stikombanyuwangi.ac.id/img/logo.png"/>
            
          </Header>
          <StkLink href="https://www.stikombanyuwangi.ac.id/" label="Website STIKOM"></StkLink>
          <StkList tag="ul" children={
               <>
                <StkListItem label="Unordered List 1"/>
                <StkListItem label="Unordered List 2"/>
                <StkListItem label="Unordered List 3"/>
                <StkListItem label="Unordered List 4"/>
                <StkListItem label="Unordered List 5"/>
               </> 
            }
            />
          <StkList tag="ol" children={
               <>
                <StkListItem label="Ordered List 1"/>
                <StkListItem label="Ordered List 2"/>
                <StkListItem label="Ordered List 3"/>
                <StkListItem label="Ordered List 4"/>
                <StkListItem label="Ordered List 5"/>
               </> 
            }
            />
        </WrapperHeader>
        <StkBanner />
        <StkCards />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <StkGambar />
        <MyComponent/>
        <StkTable data={DataMahasiswa}/>
        <br/>
        <StkForm/>
        <br/>
        <StkSearch/>
        <br/>
        <StkAlert/>
      </div>
    )
  }

export default App;


// import styled from "styled-components";
// import maskot from "./asset/maskot.png";

// function App() {
//   const MyButton = styled.button `
//     background: ${props => props.primary ? "#1177D1" : "white"};
//     padding: 1em;
//     border: none;
//     border-radius: 10px;
//     cursor: pointer;
//     font-family: montsserat;
//     &:hover {
//       background: #333333;
//       box-shadow: 0 0 10px 10px #3498db;
//       color: #FFFFFF
//     }
//     @media (max-width: 768px) {
//       background: #3498db;
//     }
//   `;
//    const CardRadius = styled.div`
//     background: ${props => props.primary ? "#1177D1" : "white"};
//     border-radius: 10px;
//     box-shadow: 0 10px 10px rgba(0, 0, 0, 2);
//     max-width: 25%;
//     margin: 20px;
//     overflow: hidden;
//     width: 100%;
//    `;

//    const CardBorder = styled.div`
//     background: ${props => props.primary ? "#1177D1" : "white"};
//     border:-style: solid;
//     border-width: 5px;
//     box-shadow: 0 10px 10px rgba(0, 0, 0, 2);
//     max-width: 25%;
//     margin: 20px;
//     overflow: hidden;
//     width: 100%;
//    `;

//   const CardPrev = styled.div`
//     background-color: #1177D1;
//     color: #FFFFFF;
//     padding: 20px;
//     max-width: 500px;
//   `;

//    const CardText = styled.div`
//     padding: 7px;
//     position: relative;
//     width: 100%;
//     text-align: justify;
//     margin: auto;
//    `;

//    const MyImage = styled.img`
//     max-width: 15%;
//     min-height: 15%;
//     width: 100%;
//     margin: auto;
//     display: block;
//    `; 
//   return(
//     <>
//     <MyButton primary>Button</MyButton>
//     <CardRadius primary>
//       <CardPrev>
//         <MyImage src={maskot}></MyImage>
//         <CardText>
//           <h4>Ini adalah gambar dari maskot STIKOM PGRI Banyuwangi. Maskot ini digunakan sebagai <i>image</i> pada <i>e-learning</i>STIKOM PGRI Banyuwangi</h4>  
//         </CardText>
//       </CardPrev>
//     </CardRadius>

//     <CardBorder primary>
//       <CardPrev>
//         <MyImage src={maskot}></MyImage>
//         <CardText>
//         <h4>Ini adalah gambar dari maskot STIKOM PGRI Banyuwangi. Maskot ini digunakan sebagai <i>image</i> pada <i>e-learning</i>STIKOM PGRI Banyuwangi</h4>   
//         </CardText>
//       </CardPrev>
//     </CardBorder>

//     <CardRadius>
//       <CardPrev>
//         <MyImage src={maskot}></MyImage>
//         <CardText>
//           <h4>Maskot STIKOM PGRI Banyuwangi</h4>
//         </CardText>
//         </CardPrev>
//     </CardRadius>
//     <CardBorder>
//       <CardPrev>
//         <MyImage src={maskot}></MyImage>
//         <CardText>
//           <h4>Maskot STIKOM PGRI Banyuwangi</h4>
//         </CardText>
//         </CardPrev>
//     </CardBorder>
    
//     </>
//   )
// }

// export default App;

// import styled from "styled-components";

// function MyComponent(props) {
//   const is_primary = props.isprimary;
//   const text = props.txt;
//   const Button = styled.button`
//     background: ${props => props.primary ? "#3498db" : "white"};
//     color: ${ is_primary ? "white" : "black"};
//     padding: 1em;
//     border: none;
//     border-radius: 10px;
//     cursor: pointer;
//     &:hover {
//       box-shadow: 0 0 10px 10px #3498db;
//       background: transparent;
//       color: #FFFFFF;
//     }
//     @media (max-width: 768px) {
//       background: blue;
//     }
//   `;

//   return (
//     <>
//       <Button primary>{text}</Button>
//     </>
//   )
// }

// export default MyComponent;


// import styled from "styled-components";

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
//   const MyButton = styled.button `
//     background: ${props => props.primary ? "red" : "white"};
//     color: ${props => props.primary ? "white" : "black"};
//     padding: 1em;
//     border: none;
//     border-radius: 10px;
//     cursor: pointer;
//     &:hover {
//       box-shadow: 0 0 10px 10px #3498db;
//       background: transparent;
//       color: #FFFFFF;
//     }
//     @media (max-width: 768px) {
//       background: blue;
//     }
//   `;

//   return (
//     <div className="App">
//       <Wrapper>
//         <Title>Hello World</Title>
//         <Button isprimary={true} txt={'submit'} />
//         <MyButton primary>submit2</MyButton>
//         <MyButton>submit3</MyButton>
//         {/* <DatePicker /> */}
//       </Wrapper>
//     </div>
//   )
// }

// export default App;