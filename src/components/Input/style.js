import styled from 'styled-components'

import { Theme } from '../../styles/colors'

import { darken } from "polished";

export const Container = styled.div`
    width: 100%;
`

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
`

export const Text = styled.span`
    color: ${Theme.colors.text_first};
    font-size: 20px;

`

export const ErrorMessage = styled.span`
    color: ${Theme.colors.error};
    font-size: 12px;
    line-height: 12px;
`

export const InputStyled = styled.input`
    width: 100%;
    height: 30px;
    color: ${Theme.colors.text_first};
    background-color: ${Theme.colors.background_second};
    outline: none;
    padding: 0 5px;
    border: 1px solid ${({ error }) => error ? Theme.colors.error : 'transparent'};
    box-shadow: 0 4px 6px ${({ error }) => error ? Theme.colors.error_boxShadow : Theme.colors.boxShadow_primary};
    transition: 400ms;
    &:hover {
        border-color: ${({ error }) => !error && darken(0.04, Theme.colors.main_user) } 
    }
    &:focus {
        border-color: ${Theme.colors.main_user};
    }
`
