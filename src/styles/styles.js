import styled from "styled-components";

export const DivContainer = styled.div`
 max-width: 80rem;
 margin: 0 auto;
 height: 100%;
`;

export const DivContainerVh = styled.div`
 max-width: 80rem;
 margin: 0 auto;
 height: 100vh;
`;

export const DivApp = styled.div`
 background-color: rgb(32, 35, 41);
`;

export const DivCharacters = styled.div`
 display: flex;
 flex-wrap: wrap;
`;

export const AContainer = styled.div`
 width: 50%;
`;

export const Center = styled.div`
 display: flex;
 height: 80vh;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 padding: 10px;
`;

export const DivBoxContainer = styled.div`
 display: flex;
 margin-top: 1rem;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 padding: 3%;
 background: white;
 overflow: "hidden", border;
 border-radius: 2%;
 box-shadow: 10px 5px 5px grey;
 scroll-behavior: auto;
`;

export const DivFlex = styled.div`
 display: flex;
 align-items: center;
 width: 100%;
`;

export const DivFlexRight = styled.div`
 display: flex;
 width: 100%;
 align-items: flex-end;
 justify-content: flex-end;
 text-align: center;
`;

export const DivTextContainer = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
 align-items: center;
 justify-content: center;
 text-align: center;
 color: white;
 font-size: 1.25rem;
`;

export const H3TextContainer = styled.div`
 font-size: 2rem;
`;

export const PStatus = styled.div`
 margin-bottom: 1rem;
`;

export const PTitle = styled.div`
 color: rgb(216, 152, 152);
 font-size: 1.5rem;
 margin-bottom: 0.5rem;
`;

export const DivCard = styled.div`
 width: 47%;
 background: rgb(59, 62, 67);
 border-radius: 0.5rem;
 overflow: hidden;
 margin-bottom: 1rem;
 margin-right: 1rem;
 display: flex;
`;

export const ImgCard = styled.img`
 width: 15rem;
 height: 100%;
`;

export const BtnRed = styled.button`
 background: firebrick;
 border-color: aliceblue;
 color: white;
`;

export const BtnSmall = styled.button`
 background: inherit;
 border-color: aliceblue;
 color: white;
 font-size: 15px;
`;

export const H2textWhite = styled.h2`
 color: black;
 /* font-size: 24px; */
`;

export const PtextWhite = styled.p`
 color: black;
 font-size: 20px;
`;
