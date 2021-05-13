import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components';

const Compose = () => {
    return (
        <Wrapper>
            <AddIcon fontSize="large" />
            <p>Compose</p>
        </Wrapper>
    );
};

export default Compose;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 35% auto;
    width: auto;
    background-color: orange;
    align-items: center;
    padding: 6px 32px 6px 8px;
`
