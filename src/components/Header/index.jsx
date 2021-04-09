import doc_kid from '../../assets/doc_kid.svg'
import { messages } from '../../mock/data'


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
        CheckBox
        } from './style'

import { useState } from 'react'

const Header = ({ title }) => {
    const [message, setMessage] = useState(messages.campaigns[0])

    const userName = 'luciano feder' //retirar da store quando tiver
    const permission = 2

    const capitalize = (str) => {
        str = str.trim().split(' ')
        str = str.map((word) => word[0].toUpperCase() + word.slice(1))
        return str.join(' ')
    }

    const currentWeekDay = () => {
        const days = [
            'Domingo',
            'Segunda-feira',
            'Terca-feira',
            'Quarta-feira',
            'Quinta-feira',
            'Sexta-feira',
            'Sabado',
        ]
        const today = (new Date()).getDay()
        return days[today]
    }

    const currentDate = () => {
        const [mm, dd, yyyy] = new Date().toLocaleDateString("en-US").split("/")
        return `${dd}/${mm}/${yyyy}`
    }

    return (
        <Container>
            <Title>{title}</Title>
            <DateText><WeekDay>{currentWeekDay()}</WeekDay>, {currentDate()}</DateText>
            <MainArea permission={permission}>
                <TextArea>
                    <WelcomeText>Olá, {capitalize(userName)}</WelcomeText>
                    <CampaignText>{message}</CampaignText>
                    <CheckBoxArea>
                        {messages.campaigns.map((msg,index) => <CheckBox onClick={console.log(index)}/>)}
                    </CheckBoxArea>
                </TextArea>
                <Img src={doc_kid} alt='Ilustracao de um doutor com uma crianca' />
            </MainArea>
        </Container>
    )
}

export default Header