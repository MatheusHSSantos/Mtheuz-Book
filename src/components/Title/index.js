import styled from "styled-components";

export const Title = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.titleColor || '#000'};
    font-size: ${props => props.fontSize || '18px'};
    text-align: ${props => props.alignTitle || 'center'};
    margin: 0;
`