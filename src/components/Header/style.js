import styled from 'styled-components'

import { Theme } from '../../styles/colors'

export const Container = styled.header`

`

export const Title = styled.h1`
    font-size: 25px;
    font-weight: 700;
    color: ${Theme.colors.text_first};
    margin-left: 30px;
`

export const DateText = styled.span`
    color: ${Theme.colors.text_first};
    font-weight: 700;
    margin-left: 30px;
`

export const WeekDay = styled.span`
    color: ${Theme.colors.text_second};
`

export const MainArea = styled.div`
    background-color: ${({ permission }) => permission === 3 ? 
                                            (Theme.colors.main_admin)
                                            :
                                            (permission === 2 ?
                                            (Theme.colors.main_healthEmployee) 
                                            : 
                                            (Theme.colors.main_user))};

    max-width: 1000px;
    height: 210px;
    padding: 30px 50px 15px 50px;
    border-radius: 50px;
    box-sizing: border-box;
    position: relative;
    margin-top: 50px;
`
export const TextArea = styled.div`
    width: 58%;
    height: 100%;
`

export const WelcomeText = styled.h2`
    font-size: 25px;
    margin: 0;
    color: ${Theme.colors.text_fourth};
`

export const CampaignText = styled.p`
    font-size: 16px;
    color: ${Theme.colors.text_fourth};
`

export const Img = styled.img`
    width: 42%;
    position: absolute;
    right: 0;
    bottom: 0;
`

export const CheckBoxArea = styled.div`
    display: flex;
    justify-content: center;
`

export const CheckBox = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${Theme.colors.background_third};
    margin: 5px;
    cursor: pointer;
`
