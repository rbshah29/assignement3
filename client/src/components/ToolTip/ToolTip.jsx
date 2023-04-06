/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import { ToolTipText, ToolTipWrapper } from "./ToolTip";

const ToolTip = ({ children, hoverText }) => (
    <ToolTipWrapper>
        {children}
        <ToolTipText>{hoverText}</ToolTipText>
    </ToolTipWrapper>
);

export default ToolTip;
