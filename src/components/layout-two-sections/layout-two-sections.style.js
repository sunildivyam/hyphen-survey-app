import styled from 'styled-components';

export const LayoutContainer = styled.section`
    display: flex;
    flex-direction: column;
    border: 1px solid ${props => props.theme.color.secondary.light};
    padding: 0px;
    margin: 0px auto;
    width: 100%;
    align-items: center;
    justify-content: start;
    box-sizing: border-box;
    * {
        box-sizing: border-box;
    }
`;

export const TopSection = styled.section`
    ${props => props.theme.styles.header}
    display: flex;
    flex-direction: column;    
    padding: ${props => props.theme.spacing.sm}px;
    margin: 0px;
    min-width: 200px;
    width: 100%;
    border-right: 1px solid ${props => props.theme.color.secondary.light};
    align-items: center;
    justify-content: center;
    font-size: ${props => props.theme.typography.size.sm};
`;

export const BottomSection = styled.section`
    display: flex;
    flex-direction: row;    
    padding: ${props => props.theme.spacing.sm}px;
    margin: 0px;
    min-width: 200px;    
    max-width: 1200px;
    width: 100%;
    border-right: 1px solid ${props => props.theme.color.secondary.light};
    align-items: start;
    justify-content: center;
`;
export const LeftSection = styled.section`
    display: flex;
    flex-direction: column;    
    padding: ${props => props.theme.spacing.sm}px;
    margin: 0px;
    min-width: 200px;
    width: 35%;
    border-right: 1px solid ${props => props.theme.color.secondary.light};
    align-items: start;
    justify-content: start;
`;

export const RightSection = styled.section`
    display: flex;
    flex-direction: column;    
    padding: ${props => props.theme.spacing.sm}px;
    margin: 0px;
    min-width: 200px;
    width: 65%;
    border-left: 1px solid ${props => props.theme.color.secondary.light};
    align-items: start;
    justify-content: start;
`;

export const Header = styled.header(props => props.theme.styles.header);