import React from 'react';
import Scrolldown from 'img/scroll.svg';
import Twitter from 'img/twitter.svg';
import Instagram from 'img/instagram.svg';
import Readmore from 'img/readmore.svg';

import {
  Svg,
  Main,
  Groupcontent7,
  Linefirst,
  Textcontent,
  Groupcontent17,
  Social,
  Socialtext,
  IconsLink,
  Maintext,
  Slider,
  Frame,
  Vl,
  Section,
  Content,
  Content1,
  Content2,
  Content3,
  Footer,
  Topicnumber,
  Maincontent,
  Tagline,
  Maincontenttext,
  Contenttext,
  More,
  Card,
  Carditem1,
  Carditem2,
  Carditem3,
  Columnone,
  Columntwo,
  Columnthree,
  Logofooter,
  Textfooter,
  Footerufc,
  Link,
  Linktext,
} from './styled';

const Home = () => {
  return (
    <>
      <Main>
        <Social>
          <Socialtext>Follow us</Socialtext>
          <IconsLink href="https://twitter.com/haskellfound">
            <img style={{ marginBottom: '20px' }} src={Twitter} alt="img" />
          </IconsLink>
          <IconsLink href="https://ru.wikipedia.org/wiki/Haskell">
            <img src={Instagram} alt="img" />
          </IconsLink>
        </Social>
        <Maintext>
          <Groupcontent7>
            <Linefirst></Linefirst>
            <span>A Hiking guide</span>
          </Groupcontent7>
          <Textcontent>
            <span>Be prepared for the Mountains and beyond!</span>
          </Textcontent>
          <Groupcontent17>
            <span>Вниз</span>
            <IconsLink href="#">
              <img
                onClick={() => {
                  document.getElementById('#footer').scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
                src={Scrolldown}
                alt="img"
              />
            </IconsLink>
          </Groupcontent17>
        </Maintext>
        <Slider>
          <Frame>
            <span>Начало</span>
            <span>01</span>
            <span>02</span>
            <span>03</span>
          </Frame>
          <div>
            <div id="progress"></div>
            <Vl></Vl>
          </div>
        </Slider>
      </Main>
      <Section>
        <Content>
          <Content1 id="#footer">
            <div>
              <Topicnumber>01</Topicnumber>
            </div>
            <Maincontent>
              <Tagline>
                <Linefirst></Linefirst>
                <span>GEt Started</span>
              </Tagline>
              <Maincontenttext>
                <span>Функциональное программирование является парадигмой</span>
              </Maincontenttext>
              <Contenttext>
                <span>
                  Теория положенная в основу функционального подхода родилась в 20-х — 30-х годах. В числе разработчиков
                  математических основ функционального программирования можно назвать Мозеса Шёнфинкеля и Хаскелла
                  Карри, разработавших комбинаторную логику, а также Алонзо Чёрча, создателя l-исчисления.
                </span>
              </Contenttext>
              <More>
                <span>читать далее...</span>
                <IconsLink href="https://pandia.ru/text/78/209/35084.php">
                  <img src={Readmore} alt="img" />
                </IconsLink>
              </More>
            </Maincontent>
            <Card>
              <Carditem1 />
            </Card>
          </Content1>
          <Content2>
            <Card>
              <Carditem2></Carditem2>
            </Card>
            <div>
              <Topicnumber>02</Topicnumber>
            </div>
            <Maincontent>
              <Tagline>
                <Linefirst></Linefirst>
                <span>UNUSUAL LANGUAGE</span>
              </Tagline>
              <Maincontenttext>
                <span>Haskell — необычный язык</span>
              </Maincontenttext>
              <Contenttext>
                <span>
                  Он не совсем для обычных вещей, и стандартное приложение с красивым интерфейсом на нём сделать не
                  получится. А вот сделать серверную часть, которая возьмёт на себя все сложные вычисления, или
                  консольную программу, которая вызывается через командную строку, — вполне. Лучше всего Haskell
                  справляется с точными вычислениями и расчётами, поэтому чем лучше вы будете знать математику — тем
                  лучше для кода.
                </span>
              </Contenttext>
              <More>
                <span>читать далее...</span>
                <IconsLink href="https://habr.com/ru/post/438970/">
                  <img src={Readmore} alt="img" />
                </IconsLink>
              </More>
            </Maincontent>
          </Content2>
          <Content3>
            <div>
              <Topicnumber>03</Topicnumber>
            </div>
            <Maincontent>
              <Tagline>
                <Linefirst></Linefirst>
                <span>where you go is the key</span>
              </Tagline>
              <Maincontenttext>
                <span>
                  Классы <br></br>в функицональном программировании играют важную роль при работе с кодом Haskell.
                </span>
              </Maincontenttext>
              <Contenttext>
                <span>
                  Они привносят динамический полиморфизм, как и интерфейсы в традиционных императивных языках, а также
                  могут быть использованы как замены отсутствующей в Haskell перегрузки функций.{' '}
                </span>
              </Contenttext>
              <More>
                <span>читать далее...</span>
                <IconsLink href="https://habr.com/ru/post/166353/">
                  <img src={Readmore} alt="img" />
                </IconsLink>
              </More>
            </Maincontent>
            <Card>
              <Carditem3></Carditem3>
            </Card>
          </Content3>
          <Footer>
            <Columnone>
              <Logofooter>
                <span>H</span>
                <span>A</span>
                <span>S</span>
                <span>K</span>
                <span>E</span>
                <span>L</span>
                <span>L</span>
              </Logofooter>
              <Textfooter>
                <span>Отправляйтесь туда и откройте для себя свой следующий склон, гору и пункт назначения!</span>
              </Textfooter>
              <Footerufc>
                <span>Copyright 2019 Haskell, Inc. Terms & Privacy</span>
              </Footerufc>
            </Columnone>
            <Columntwo>
              <Link>Подробнее в Блоге</Link>
              <Linktext>
                <span>О Haskell</span>
                <span>Участники и писатели</span>
                <span>Напишите нам</span>
                <span>Свяжитесь с нами</span>
              </Linktext>
            </Columntwo>
            <Columnthree>
              <Link>Больше о Haskell</Link>
              <Linktext>
                <span>Команда</span>
                <span>Работа</span>
                <span>Нажмите</span>
              </Linktext>
            </Columnthree>
          </Footer>
        </Content>
      </Section>
    </>
  );
};

export default Home;
