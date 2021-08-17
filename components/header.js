import Link from 'next/link'
import styled from 'styled-components'
import {useState} from 'react'

const AInner = styled.a`
    list-style: none;
    padding: 4px 22px;
    cursor: pointer;
    border-bottom: ${props => props.focused ? '2px solid #F44336' : 'none'};
`

const Tab = styled.div`
    display: flex;
    padding: 24px;
    border-bottom: 1px solid #E0E0E0;
`

export const Header = ({ tab }) => {
    return (
        <Tab>
            <Link href="/">
            <AInner focused={tab === 'top'}>Top</AInner>
            </Link>
            <Link href="/regist">
            <AInner focused={tab === 'regist'}>メッセージ登録</AInner>
            </Link>
        </Tab>
    )
}