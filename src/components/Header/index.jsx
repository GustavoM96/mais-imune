import doc_kid from "../../assets/doc_kid.svg";
import { messages } from "../../mock/data";

import {
  Container,
  Title,
  DateText,
  WeekDay,
  MainArea,
  TextArea,
  WelcomeText,
  CampaignText,
  Img,
  CheckBoxArea,
  CheckBox,
  Checked,
} from "./style";

import { useState, useEffect } from "react";

const Header = ({ title }) => {
  const [checkedBox, setCheckedBox] = useState(0);

  const permission = JSON.parse(localStorage.getItem("permission")) || 1;
  const userName = JSON.parse(localStorage.getItem("name")) || 1;

  // const capitalize = (str) => {
  //   str = str.trim().split(" ");
  //   str = str.map((word) => word[0].toUpperCase() + word.slice(1));
  //   return str.join(" ");
  // };

  const createLinkedObj = () => {
    let result = {};
    for (let i = 0; i < messages.campaigns.length - 1; i++) {
      result[i] = i + 1;
    }
    result[messages.campaigns.length - 1] = 0;
    return result;
  };

  const updateMessage = () => {
    const linkedObj = createLinkedObj();
    setTimeout(() => setCheckedBox(linkedObj[checkedBox]), 5000);
  };

  const currentWeekDay = () => {
    const days = [
      "Domingo",
      "Segunda-feira",
      "Terca-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sabado",
    ];
    const today = new Date().getDay();
    return days[today];
  };

  const currentDate = () => {
    const [mm, dd, yyyy] = new Date().toLocaleDateString("en-US").split("/");
    return `${dd}/${mm}/${yyyy}`;
  };

  useEffect(() => {
    updateMessage();
  });

  return (
    <Container>
      <Title>{title}</Title>
      <DateText>
        <WeekDay>{currentWeekDay()}</WeekDay>, {currentDate()}
      </DateText>
      <MainArea permission={permission}>
        <TextArea>
          <WelcomeText>Olá, {userName}</WelcomeText>
          <CampaignText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {messages.campaigns[checkedBox]}
          </CampaignText>
          <CheckBoxArea>
            {messages.campaigns.map((msg, index) => (
              <CheckBox key={index}>
                {index === checkedBox && <Checked />}
              </CheckBox>
            ))}
          </CheckBoxArea>
        </TextArea>
        <Img src={doc_kid} alt="Ilustracao de um doutor com uma crianca" />
      </MainArea>
    </Container>
  );
};

export default Header;
