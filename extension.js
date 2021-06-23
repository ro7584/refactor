// extension - abracadabra

function inlineFunctionOrValue(data) {
    return data.get('items').map(item => {
        const { V2, V3, V4, category } = item.toJS();
        const hasLink = newFunction(category, V3, V4);
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

        return props;
    });

    function newFunction(category: any, V3: any, V4: any) {
        return category !== "industry" && V3 !== "" && V4 !== "";
    }

    function getNavigationLink(a1, a2, a3) { }
}

// ------------------------------------------------------------------------------------------------------------
function removeRedundantElse(d1) {
    if (d1 === 1) {
        return true;
    } else {
        /*

        multiple lines statement/expression

















         */
        doSomething();
        return false;
    }
}

// ------------------------------------------------------------------------------------------------------------
function convertIfElseToTernary(e1) {
    if (e1 === 'apple') {
        return 1;
    } else {
        return 2;
    }
}

// ------------------------------------------------------------------------------------------------------------
function convertIfElseToSwitch(f1) {
    if (f1 === 'apple') {
        callA();
    } else if (f1 === 'banana') {
        callB();
    } else {
        callC();
    }
}

// ------------------------------------------------------------------------------------------------------------
const removeArrowFunctionBraces = () => {
    return 'hello';
}

// ------------------------------------------------------------------------------------------------------------
const convertToStringTemplate = (name) => {
    const h = 'Hi' + name;
    const errorMsg = 'DateTime: Error Happend'
}

// ------------------------------------------------------------------------------------------------------------
function convertToForEach() {
    let list = [{ name: 'Jone' }, { name: 'Joe' }];

    for (let i = 0; i < list.length; i++) {
        list[i].name = `Hi ${list[i].name}`
    }
}

// next to vscode2.ts
