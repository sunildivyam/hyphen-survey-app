import React from 'react';
import {LayoutContainer, LeftSection, RightSection, TopSection, BottomSection, Header} from './layout-two-sections.style';

export default ({leftChildren, rightChildren, title}) => {

    return (
        <LayoutContainer>
            <TopSection>
                <Header>{title}</Header>
            </TopSection>
            <BottomSection>
                <LeftSection>
                    {leftChildren}
                </LeftSection>
                <RightSection>
                    {rightChildren}
                </RightSection>
            </BottomSection>
        </LayoutContainer>
    );
}