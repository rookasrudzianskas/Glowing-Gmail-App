import React from 'react';
import styled from "styled-components";
import Compose from "./buttons/Compose";
import { sidebarButtonItems } from "./data/SideBarButtonItems";

const Sidebar = () => {
    return (
        <Wrapper>
            <ComposeWrapper>
                <Compose />
            {/*    compose button*/}
            </ComposeWrapper>

            <SideButtonsWrapper>
                {

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
const Wrapper = styled.div``
const ComposeWrapper = styled.div``
const SideButtonsWrapper = styled.div``
const MeetWrapper = styled.div``
const HangoutsWrapper = styled.div``
const BottomIconsWrapper = styled.div``
