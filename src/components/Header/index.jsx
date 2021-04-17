import doc_kid from "../../assets/doc_kid.svg";
import { messages } from "../../mock/data";

import { nameFormat } from "../../utils/index";

import {
  Container,
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
  Link,
} from "./style";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Header = ({ title }) => {
  const [checkedBox, setCheckedBox] = useState(0);

  const permission = JSON.parse(localStorage.getItem("permission")) || 1;
  const { name } = useSelector((state) => state.user);

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
      <DateText>
        <WeekDay permission={permission}>{currentWeekDay()}</WeekDay>,{" "}
        {currentDate()}
      </DateText>
      <MainArea permission={permission}>
        <TextArea permission={permission}>
          <WelcomeText className="no-border" permission={permission}>
            Olá, {nameFormat(name)}
          </WelcomeText>
          <CampaignText
            permission={permission}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {messages.campaigns[checkedBox].text.split(" ").map((word) => {
              return word === messages.campaigns[checkedBox].link ? (
                <Link
                  href={messages.campaigns[checkedBox].link}
                  rel="noreferrer"
                  target="_blank"
                >
                  site
                </Link>
              ) : (
                <>{`${word} `}</>
              );
            })}
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
