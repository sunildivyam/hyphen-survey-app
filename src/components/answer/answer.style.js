import styled from 'styled-components';

export const Field = styled.input`
    ${props => props.theme.styles.text}
    width: 100%;
    margin: ${props => props.theme.spacing.sm}px 0px;
    padding: ${props => props.theme.spacing.sm}px;
    border: ${props => props.isEditMode ? 'inherit': 'none'};
`;


export const RemoveButton = styled.button`
    ${props => props.theme.styles.button.normal}    
    ${props => props.theme.styles.button.barebone}
    color: ${props => props.theme.color.danger}
    &:hover {
        border: 1px solid ${props => props.theme.color.secondary.lighter}
    }
    &[disabled] {
        color: ${props => props.theme.color.secondary.lighter}
    }   
`;

export const EditButton = styled.button`
    ${props => props.theme.styles.button.normal}    
    ${props => props.theme.styles.button.barebone}
    color: ${props => props.theme.color.success}
    &:hover {
        border: 1px solid ${props => props.theme.color.secondary.lighter}
    }
    &[disabled] {
        color: ${props => props.theme.color.secondary.lighter}
    }   
`;

export const ButtonPanel = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 1px;
    top: 0px;    
    height: 100%;
    align-items: center;
    justify-content: right;
`;
export const AnswerSection = styled.section`
    position: relative;
    margin: 0px;
    padding: 0px;
`;
