import styled from 'styled-components';

export const ListSection = styled.section`
  background-color: ${props => props.theme.color.white};  
  padding-bottom: 30px;
  width: 100%;
`;

export const Header = styled.header(props => props.theme.styles.header);

export const List = styled.ul`
  list-style: none;
  margin: ${props => props.theme.spacing.sm}px;
  padding-left: ${props => props.theme.spacing.none}px;  
`;

export const ListItem = styled.li` 
  ${props => props.theme.styles.text} 
  padding: ${props => props.theme.spacing.sm}px;  
  cursor: pointer;
  background-color: ${props => props.selected ? props.theme.color.primary.light: 'inherit'};
  font-size: ${props => props.theme.typography.size.md};
  color: ${props => props.selected ? props.theme.color.white: 'inherit'};

  &:before {
    content: '';
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid ${props => props.selected ? props.theme.color.primary.normal: props.theme.color.primary.light};
    margin-right: 7px;    
  }
  &:hover {
    background-color: ${props => props.theme.color.primary.light};

    &:before {
      border-color: ${props => props.theme.color.primary.normal};
    }
  }
`;

export const NoData = styled.li`
    ${props => props.theme.styles.text} 
`;
