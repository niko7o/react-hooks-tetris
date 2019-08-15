import styled from 'styled-components';

/*
 * We are using css calculations to keep 
 * the aspect ratio of the grid cells
 */

export const StyledStage = styled.div`
    background: #111;
    border: 1px solid #333;
    display: grid;
    grid-template-rows: repeat(${props => props.height}, calc(25vw / ${props => props.width}));
    grid-template-columns: repeat(${props => props.width}, 1fr);
    grid-gap: 1px;
    width: 100%;
    max-width: 25vw;
`