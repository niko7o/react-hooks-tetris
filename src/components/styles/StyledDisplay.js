import styled from 'styled-components';

export const StyledDisplay = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 16px 14px;
    border: 1px solid #333;
    min-height: 30px;
    width: 100%;
    box-sizing: border-box;
    color: ${props => (props.gameOver ? '#F00' : '#999')};
    background: #FFF;
    font-family: Pixel, san-serif;
    font-size: .8rem;
`