import styled from 'styled-components';

export const ListSection = styled.section`
width: 100%;
background-color: ${props => props.theme.color.secondary.lighter};
padding-bottom: 30px; 
`;

export const Header = styled.header`
    ${props => props.theme.styles.labels}
    background-color: ${props => props.theme.color.success};
    color: ${props => props.theme.color.secondary.lighter};
`;

export const List = styled.ul`
list-style: none;
margin: ${props => props.theme.spacing.sm}px;
`;

export const ListItem = styled.li`  
    padding: ${props => props.theme.spacing.sm}px;  
    text-align: ${props => props.right ? 'right': 'inherit'};
`;

export const NoData = styled.li`
    ${props => props.theme.styles.text}
`;

export const AddButton = styled.button`
    &:focus {
        outline: none;
    }
    ${props => props.theme.styles.button.normal}    
    ${props => props.theme.styles.button.barebone}
    color: ${props => props.theme.color.success}
    font-size: 60px;
    &:hover {
        border: 1px solid ${props => props.theme.color.secondary.lighter}
    }
    &[disabled] {
        color: ${props => props.theme.color.secondary.lighter}
    }   
`;

export const EditButton = AddButton;
