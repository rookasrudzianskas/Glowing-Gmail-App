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
                <Logo>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png" alt=""/>
                </Logo>
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
    display: grid;
    grid-template-columns: 270px auto 170px;
    border-bottom: 1px solid lightgray;
    height: 70px;
    align-items: center;
`

const LogoWrapper = styled.div`
    height: 45px;
    display: grid;
    grid-template-columns: 25% auto;
    
`

const Logo = styled.div`
    display: flex;
    height: 45px;
    
`
const SearchWrapper = styled.div``
const SearchBarWrapper = styled.div``
const IconWrapper = styled.div``
