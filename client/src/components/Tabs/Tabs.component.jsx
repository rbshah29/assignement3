/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import React, { useEffect, useState } from "react";

const Tabs = ({ children, active }) => {
    const [tabsName, setTabsName] = useState([]);
    const [tabsContent, setTabsContent] = useState({});

    console.log(tabsName);

    useEffect(() => {
        const headers = [];
        const contents = {};

        React.Children.forEach(children, (element) => {
            console.log(element);
            if (element) {
                const { name, children } = element.props;
                contents[name] = children;
            }
        });

        setTabsName(headers);
        setTabsContent({ ...contents });
    }, [children]);

    return (
        <div>
            <div>{Object.keys(tabsContent).map((key) => (key === active ? <div key={key}>{tabsContent[key]}</div> : null))}</div>
        </div>
    );
};

export default Tabs;
