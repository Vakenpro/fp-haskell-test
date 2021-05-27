import styled from 'styled-components';
import imgTopic1 from 'img/01.jpg';
import imgTopic2 from 'img/02.png';
import imgTopic3 from 'img/03.jpg';

export const Svg = styled.svg`
  display: flex;
  text-align: center;
  margin-left: auto;
  outline: none;
`;

export const Layerbgcontent1 = styled.div`
  position: absolute;
  width: 100%;
  height: 700px;
  top: 1200px;
  background: linear-gradient(180deg, rgba(11, 29, 38, 0) 0%, #0b1d26 61.38%);
`;

export const Layerbgcontent2 = styled.div`
  position: absolute;
  width: 100%;
  height: 2650px;
  top: 1900px;
  background: linear-gradient(rgba(11, 29, 38, 0) 0%, #0b1d26 0%);
`;

export const Wrapper = styled.div`
  background: linear-gradient(to bottom, #E0FFFF, #AFEEEE);
  min-height: 1007px;
`;

export const Header = styled.div`
  min-width: 1920px;
  min-height: 4600px;
  font-size: 18px;
  font-weight: 400;
  background: #E0FFFF;
  background: linear-gradient(to bottom, #E0FFFF, #AFEEEE);
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 64px 64px;
  margin-right: 64px;
  min-width: 1760px;
  min-height: 25px;
  list-style-type: none;
  color: white;
`;

export const Logo = styled.div`
  font-size: 32px;
  line-height: 38px;
  letter-spacing: 0.01em;
  text-transform: capitalize;
  color: black;
  & > span:not(:last-of-type) {
    margin-right: 3px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  line-height: 22px;
  & > li {
    margin-right: 40px;
    list-style-type: none;
    & > a {
      text-decoration: none;
      color: black;
    }
  }
`;

export const User = styled.div`
  display: flex;
  text-align: center;
  font-size: 17px;
  line-height: 21px;
  color: gray;
  &:hover {
    cursor: pointer;
  }
`;

export const IconsLink = styled.a`
  text-decoration: none;
  margin-right: 8px;
  margin-left: 16px;
  &:hover {
    opacity: 0.24;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.div`
  display: flex;
  position: relative;
  top: 134px;
  padding-left: 80px;
  padding-right: 80px;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: black;
`;

export const Maintext = styled.div`
  padding-left: 316px;
  padding-right: 316px;
`;

export const Groupcontent7 = styled.div`
  display: flex;
  align-items: center;
  font-weight: 800;
  letter-spacing: 6px;
  text-transform: uppercase;
  color: #fbd784;
`;

export const Linefirst = styled.span`
  height: 2px;
  width: 72px;
  background-color: #fbd784;
  margin-right: 24px;
`;

export const Textcontent = styled.div`
  font-family: "New Tegomin", serif;
  font-weight: 600;
  font-size: 84px;
  line-height: 100px;
  text-transform: capitalize;
  margin-top: 32px;
  margin-bottom: 33px;
`;

export const Groupcontent17 = styled.div`
  display: flex;
  align-items: center;
`;

export const Social = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  flex-flow: column;
  justify-content: space-between;
  max-width: 24px;
  max-height: 173px;
  margin-top: 120px;
`;

export const Socialtext = styled.span`
  transform: rotate(90deg);
  width: 77px;
  height: 22px;
  color: black;
  margin-bottom: 48px;
`;

export const Slider = styled.div`
  position: fixed;
  left: 1720px;
  display: flex;
  margin-top: 90px;
  margin-right: 46px;
`;

export const Frame = styled.div`
  display: flex;
  max-width: 42px;
  max-height: 208px;
  text-align: right;
  flex-flow: column;
  justify-content: space-between;
  margin-right: 32px;
  & > span {
    cursor: pointer;
  }
`;

export const Vl = styled.div`
  margin-top: -20px;
  background-color: black;
  height: 240px;
  width: 3px;
  opacity: 0.5;
`;

export const Section = styled.div`
  padding-top: 970px;
  padding-left: 150px;
  padding-right: 229px;
  min-width: 1462px;
  min-height: 3040px;
  margin-right: 300px;
`;

export const Content = styled.div`
  position: absolute;
  max-width: 1462px;
  max-height: 720px;
`;

export const Content1 = styled.div`
  padding-bottom: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content2 = styled.div`
  margin-bottom: 200px;
  margin-left: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 1462px;
  min-height: 720px;
`;

export const Content3 = styled.div`
  margin-bottom: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Footer = styled.div`
  margin-left: 50px;
  position: absolute;
  min-width: 1462px;
  min-height: 280px;
  display: flex;
`;

export const Topicnumber = styled.span`
  position: relative;
  left: 110px;
  bottom: 250px;
  font-weight: bold;
  font-size: 240px;
  line-height: 240px;
  color: #ffffff;
  opacity: 0.1;
`;

export const Maincontent = styled.div`
  position: relative;
  margin-right: 114px;
`;

export const Tagline = styled.div`
  display: flex;
  align-items: center;
  font-weight: 800;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 6px;
  text-transform: uppercase;
  color: #fbd784;
  margin: 27px 0px;
`;

export const Maincontenttext = styled.div`
  font-weight: 600;
  font-size: 46px;
  line-height: 77px;
  margin: 27px 0px;
  color: #ffffff;
`;

export const Contenttext = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 32px;
  margin: 27px 0px;
  color: #ffffff;
`;

export const More = styled.div`
  display: flex;
  font-size: 18px;
  line-height: 22px;
  color: #fbd784;
`;

export const Card = styled.div`
  perspective: 1000px;
  transform-style: preserve-3d;
`;

export const Carditem1 = styled.div`
  width: 566px;
  height: 720px;
  transition: tranform 0.2s;
  background: url('${imgTopic1}') 100% 100% no-repeat;
  background-size: contain;
  background-position: center center;
`;

export const Carditem2 = styled.div`
  width: 566px;
  height: 720px;
  transition: tranform 0.2s;
  background: url('${imgTopic2}') 100% 100% no-repeat;
  background-size: contain;
  background-position: center center;
`;

export const Carditem3 = styled.div`
  width: 566px;
  height: 720px;
  transition: tranform 0.2s;
  background: url('${imgTopic3}') 100% 100% no-repeat;
  background-size: contain;
  background-position: center center;
`;

export const Columnone = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 480px;
  min-width: 360px;
  min-height: 280px;
`;

export const Columntwo = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  margin-right: 212px;
  min-width: 193px;
  min-height: 280px;
`;

export const Columnthree = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 161px;
  min-height: 184px;
`;

export const Logofooter = styled.div`
  font-size: 32px;
  line-height: 38px;
  letter-spacing: 0.01em;
  text-transform: capitalize;
  color: white;
  margin-bottom: 24px;
`;

export const Textfooter = styled.div`
  max-width: 303px;
  max-height: 64px;
  font-weight: bold;
  font-size: 18px;
  line-height: 32px;
  color: #ffffff;
  margin-bottom: 122px;
`;

export const Footerufc = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  color: #ffffff;
  opacity: 0.5;
`;

export const Link = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #fbd784;
  margin-bottom: 24px;
`;

export const Linktext = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  color: #ffffff;
  margin-bottom: 16px;\
  & > * {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }
`;