import React from 'react';
import styled from "styled-components";
import Compose from "./buttons/Compose";
import { sideBarButtonItems } from './data/SideBarButtonItems'

const Sidebar = () => {
    return (
        <Wrapper>
            <ComposeWrapper>
                <Compose />
            {/*    compose button*/}
            </ComposeWrapper>

            <SideButtonsWrapper>
                {
                    sideBarButtonItems.map(item => (
                        // Looper per all and display something
                        <SidebarButtonItem>{item.icon} {item.text}</SidebarButtonItem>
                    ))
                }
            {/*    Buttons*/}
            </SideButtonsWrapper>

            <MeetWrapper>
            {/*    google meet*/}
            </MeetWrapper>

            <HangoutsWrapper>
            {/*    hangouts*/}
            </HangoutsWrapper>

            <BottomIconsWrapper>

            </BottomIconsWrapper>
        </Wrapper>
    );
};

export default Sidebar;
const Wrapper = styled.div`
    border-right: 1px solid lightgray;
    height: 100vh;
`
const ComposeWrapper = styled.div`
    display: grid;
    place-items: start;
    padding: 10px 20px;
    
`
const SideButtonsWrapper = styled.div``
const MeetWrapper = styled.div``
const HangoutsWrapper = styled.div``
const BottomIconsWrapper = styled.div``
const SidebarButtonItem = styled.div`
    display: grid;
    grid-template-columns: 14% auto;
`
