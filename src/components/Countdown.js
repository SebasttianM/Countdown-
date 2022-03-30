import styled from "styled-components";
import "../App.css";
import { Advert, ContainerCards, ContainerCounter, ContainerNumbers, Logos, Numbers, SocialMedia, TextNumbers, Titles } from "./componentStyle/styles";



const Countdown = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  
  return (
      <ContainerCounter>
          <Advert>
              <h1>WE'RE LAUNCHING SOON</h1>
          </Advert>
          <ContainerNumbers>
              <ContainerCards>
                  <Numbers>
                      <TextNumbers>{timerDays}</TextNumbers>
                  </Numbers>
                  <Titles>DAYS</Titles>
              </ContainerCards>
              <ContainerCards>
                  <Numbers>
                      <TextNumbers>{timerHours}</TextNumbers>
                  </Numbers>
                  <Titles>HOURS</Titles>
              </ContainerCards>
              <ContainerCards>
                  <Numbers>
                      <TextNumbers>{timerMinutes}</TextNumbers>
                  </Numbers>
                  <Titles>MINUTES</Titles>
              </ContainerCards>
              <ContainerCards>
                  <Numbers>
                      <TextNumbers>{timerSeconds}</TextNumbers>
                  </Numbers>
                  <Titles>SECONDS</Titles>
              </ContainerCards>
          </ContainerNumbers>
          <Logos>
              <SocialMedia>
                  <img
                      src="https://res.cloudinary.com/svartblood/image/upload/v1648531533/icon-facebook_exnkxv.svg"
                      alt=""
                  />
              </SocialMedia>
              <SocialMedia>
                  <img
                      src="https://res.cloudinary.com/svartblood/image/upload/v1648531533/icon-pinterest_smm5dl.svg"
                      alt=""
                  />
              </SocialMedia>
              <SocialMedia>
              <img
                  src="https://res.cloudinary.com/svartblood/image/upload/v1648531533/icon-instagram_kpnsl6.svg"
                  alt=""
              />
              </SocialMedia>
          </Logos>
      </ContainerCounter>
  );
};


export default Countdown;
