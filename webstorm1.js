// rename reference
export function hey(data) {
    return data.get('items').map(item => {
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
// better extract method
function hey1(data) {
    return data.get('items').map(item => {
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
// introduce variable
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
// move to everywhere
export function moveToEverywhere(message) {
    console.log(message);
}

// ------------------------------------------------------------------------------------------------------------
// propagate to destructuring declaration
function propagateToDestructuringDeclaration(params) {
    const value = params.V1 + params.V2 + params.V3;
    const value2 = params.V1 + params.V2;

    return value + value2;
}

// ------------------------------------------------------------------------------------------------------------
// introduce parameter
const calculateCircleArea = (radius) => {
    return 3.1415926 * radius * radius;
}
const area = calculateCircleArea(5);
const area2 = calculateCircleArea(10);

// ------------------------------------------------------------------------------------------------------------

function changeSignature(a, b, c) {
    console.log(a,b,c)
}
changeSignature(1,2,3)

// ------------------------------------------------------------------------------------------------------------

function safeDelete(a, b, c, d) {
    console.log(a,b,c)
}
safeDelete(1,2,3, 4)

// next to webstorm2.tsx
