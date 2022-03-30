import styled from "styled-components";


export const DivStars = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(35, 28, 43);
  color: white;
  background-image: url(https://res.cloudinary.com/svartblood/image/upload/v1648531533/bg-stars_hro3b9.svg);
`;

export const DivMountains = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(https://res.cloudinary.com/svartblood/image/upload/v1648531533/pattern-hills_uiq7cq.svg);
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerCounter = styled.div`
width: 1440px;
height: 400px;
/* border: 1px red solid; */
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
`
export const ContainerNumbers= styled.section`
display: flex;
flex-direction: row;
/* border: 1px red solid; */
width: 1200px;
height: 450px;

`
export const ContainerCards =styled.div`
display: flex;
flex-direction: column;
margin: 5px ;
/* border: 1px red solid; */
width: 25%;
`
export const Numbers = styled.div`
width: 50%;
height: 50%;
/* border: 1px red solid; */
margin: 0 auto;
background: linear-gradient(
    to bottom,
    hsl(235, 16%, 14%),
    hsl(236, 21%, 26%)
  );
display: flex;
justify-content: center;
align-items: center;
`
export const TextNumbers = styled.p`
font-size: 50px;
color: hsl(345, 95%, 68%);
align-items: center;
justify-content: center;
`
export const Titles= styled.h3`
font-size: 14px;
display: inline-flexbox;
letter-spacing: 5px;
align-items: center;
justify-content: center;
font-weight: 500;
color: hsl(237, 18%, 59%);
`

export const Advert = styled.h1`
font-size: x-small;
padding-bottom: 25px;
margin-bottom: 55px;
font-weight: 500;
letter-spacing: 8px;
`

export const Logos = styled.div`
width: 800px;
height: 200px;
display: flex;
flex-direction:row;
justify-content: center;
align-items: center;
align-items: center;
margin-left: 20px;
/* border: 1px red solid ; */
`

export const SocialMedia = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    img:hover {
        color: hsl(345, 95%, 68%);
    }
`;