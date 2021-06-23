interface AppProps {
   title: string;
}

// extract component
const App = (props : AppProps) => {
    return (
        <div>
            <div id="header">
                <div className="title">Here is {props.title}</div>
            </div>
            <div id="body"></div>
            <div id="footer"></div>
        </div>
    )
}

// ------------------------------------------------------------------------------------------------------------
// switch between functional/class component
class App1 extends React.Component<AppProps> {
    render() {
        return (
            <div>
                <div id="header">
                    <div className="title">Here is {this.props.title}</div>
                </div>
                <div id="body"></div>
                <div id="footer"></div>
            </div>
        )
    }
}


// ------------------------------------------------------------------------------------------------------------
// other useful feature
function createMethod() {
    const url = 'https://example.com'
    const params : { headers?: { method: 'POST' | 'GET'}} = {}
    const payload: {[key: string]: any} = {};

    const response = fetchSomething(url, params, payload)
}

// ------------------------------------------------------------------------------------------------------------
// generate types
const lib  = {
    greet: (personName) => { console.log(`Hi ${personName}`) },
    dance: () => { console.log('dancing'); },
}

// ------------------------------------------------------------------------------------------------------------
// generate method
lib.hey('Fam')

const Body = () => (
    <div>
        <Header title="appbar" onClick={() => {    }}>
           Header
        </Header>
    </div>
)
