import styled from 'styled-components';

export const Header = styled.header(props => props.theme.styles.header);

export const Form = styled.form`
    width: 100%;
    margin: 0px;
    padding: ${props => props.theme.spacing.md}px;
    border: 1px solid ${props => props.theme.color.secondary.light};
`;

export const FormGroup = styled.div`
    ${props => props.theme.styles.text}
    display: block;
    width: 100%;
    margin: ${props => props.theme.spacing.md}px 0px;
    padding: ${props => props.theme.spacing.md}px;
    ${props => props.group && `
            padding-bottom: 0px;
            padding-top: 0px;
            margin-bottom: 0px;`}
    ${props => props.right && `
            text-align: right;`}
`;
export const Label = styled.label`
    ${props => props.theme.styles.labels}    
    font-size: ${props => props.theme.typography.size.sm}px;
    margin: ${props => props.theme.spacing.sm}px 0px;
    padding: ${props => props.theme.spacing.sm}px;
    padding-left: 0px;    
`;
export const Button = styled.button`
    ${props => props.theme.styles.button.normal}
    &:hover {
        ${props => props.theme.styles.button.hover}
    }
    &[disabled] {
        ${props => props.theme.styles.button.disabled}
    }    
`;

export const AddButton = styled.button`
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

export const Field = styled.input`
    ${props => props.theme.styles.text}
    width: 100%;
    margin: ${props => props.theme.spacing.sm}px 0px;
    padding: ${props => props.theme.spacing.sm}px; 
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    &:after {
        ${props => props.theme.styles.checkbox.normal}
    }

    &:checked:after {
        ${props => props.theme.styles.checkbox.checked}
    }
`;
export const FormError = styled.div`
    ${props => props.theme.styles.text}
    color: ${props => props.theme.color.danger}
`;