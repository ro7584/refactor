import { nightGreet, greet } from "./lib";

// rename
export function hey(data) {
    return data.get('items').map(item => {
        const { V2, V3, V4 } = item.toJS();
        const foo = category !== "industry" && V3 !== "" && V4 !== "" && Customer.IN_APP;

        const key = `${V3}-${V4}`;
        const props = foo
            ? {
                href: getNavigationLink(category, V3, V4),
                key: key,
                className: 'label-1',
            }
            : {
                key: key,
                className: 'label-2',
            };

        return <a {...props}>{V2}</a>;
    });
}

// gotcha
nightGreet('Joe');

// ------------------------------------------------------------------------------------------------------------
// extract method
function hey1(data) {
    return data.get('items').map(item => {
        // gotcha
        const { V2, V3, V4 } = item.toJS();
        const hasLink = category !== "industry" && V3 !== "" && V4 !== "" && Customer.IN_APP;

        const key = `${V3}-${V4}`;
        const props = hasLink
            ? {
                href: getNavigationLink(category, V3, V4),
                key: key,
                className: 'label-1',
            }
            : {
                key: key,
                className: 'label-2',
            };

        return <a {...props}>{V2}</a>;
    });
}

// ------------------------------------------------------------------------------------------------------------
// extract variable
function hey2(data) {
    return data.get('items').map(item => {
        const { V2, V3, V4 } = item.toJS();

        const props = category !== "industry" && V3 !== "" && V4 !== "" && Customer.IN_APP
            ? {
                href: getNavigationLink(category, V3, V4),
                key: `${V3}-${V4}`,
                className: 'label-1',
            }
            : {
                key: `${V3}-${V4}`,
                className: 'label-1',
            };

        return <a {...props}>{V2}</a>;
    });
}

// ------------------------------------------------------------------------------------------------------------
// move to new file
function moveToNewFile(message) {
    console.log(message);
}

// organize import
nightGreet();
