import styled from 'styled-components';

export const StyledCell = styled.div`
    width: auto;
    background: rgba(${props => props.color}, .8);
    border: ${props => (props.type === 0 ? '0px solid' : '1px solid')}
    border-top-color: rgba(${props => props.color}, 1)
    border-right-color: rgba(${props => props.color}, 1)
    border-bottom-color: rgba(${props => props.color}, .1)
    border-left-color: rgba(${props => props.color}, .3)
`