import styled from 'styled-components';

export const RadioButton = styled.input.attrs({type: 'radio'})`
    &:after {
        ${props=> props.theme.styles.radioButton.normal}
    }

    &:checked:after {
        ${props=> props.theme.styles.radioButton.checked}
    }
`;

export const Checkbox = styled.input.attrs({type: 'checkbox'})`
    &:after {
        ${props=> props.theme.styles.checkbox.normal}
    }

    &:checked:after {
        ${props=> props.theme.styles.checkbox.checked}
    }
`;

export const ListSection = styled.section`
  background-color: ${props => props.theme.color.white};
  padding-bottom: 30px;  
  border-bottom: 2px solid ${props => props.theme.color.primary.light};
`;

export const Header = styled.header`
  ${props => props.theme.styles.labels}
  font-size: 1.1em;
`;
export const QuestionHead = styled.span`
  ${props => props.theme.styles.labels}
  font-size: 1.1em;
  color: ${props => props.theme.color.primary.light};
`
export const Answer = styled.span`
  ${props => props.theme.styles.text}
`;
export const List = styled.ul`
  list-style: none;
  margin: ${props => props.theme.spacing.sm}px;
`;

export const ListItem = styled.li`  
  padding: ${props => props.theme.spacing.sm}px;
`;
export const EditButton = styled.button`
    &:focus {
      outline: none;
    }
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