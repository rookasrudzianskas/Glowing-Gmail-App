import React from 'react';
import "./styles/Header.css";
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Header = () => {

    return (
        <Wrapper>
            <LogoWrapper>
                <div>
                    <MenuIcon />
                {/*    menu icon*/}
                </div>
                <img src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" alt=""/>
            </LogoWrapper>

            <SearchWrapper>
                <SearchBarWrapper>
                    <SearchIcon />
                    <input type="text" placeholder="Search Gmail"/>
                    <ExpandMoreIcon />
                </SearchBarWrapper>
            </SearchWrapper>

            <IconWrapper>
                <HelpOutlineIcon/>
                <SettingsIcon/>
                <AppsIcon />
                <AccountCircleIcon />
            </IconWrapper>
        </Wrapper>
    );
};

export default Header

const Wrapper = styled.div`

`
const LogoWrapper = styled.div``
const SearchWrapper = styled.div``
const SearchBarWrapper = styled.div``
const IconWrapper = styled.div``
