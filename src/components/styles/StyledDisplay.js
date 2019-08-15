import styled from 'styled-components';

export const StyledDisplay = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 20px;
    border: 4px solid #333;
    border-radius: 20px;
    min-height: 30px;
    width: 100%;
    box-sizing: border-box;
    color: ${props => (props.gameOver ? '#F00' : '#999')};
    background: #000;
    font-family: Pixel, san-serif;
    font-size: 1rem;
`