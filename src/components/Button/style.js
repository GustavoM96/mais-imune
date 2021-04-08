import styled from 'styled-components'

import { darken } from "polished";

import { Theme } from '../../styles/colors'

export const ButtonStyled = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    min-width: 150px;
    box-sizing: border-box;
    outline: none;
    background-color: ${Theme.colors.callToAction_first};
    color: ${Theme.colors.text_fourth};
    font-weight: 700;
    border: none;
    border-radius: 7px;
    transition: 400ms;
    cursor: pointer;
    &:hover {
        background-color: ${darken(0.04, Theme.colors.callToAction_first)}
    }
`