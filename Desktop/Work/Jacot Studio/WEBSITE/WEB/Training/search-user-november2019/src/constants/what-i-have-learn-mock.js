import PropTypes from 'prop-types';


export const TipProptypes = PropTypes.shape(
    {
        title: PropTypes.string,
        code: PropTypes.string,
        text: PropTypes.string,
        id: PropTypes.number
    }
).isRequired;

export const TipsProptypes =  PropTypes.arrayOf(TipProptypes).isRequired;

export const Tip = [
    {
        id: 0,
        title:"componentDidMount()",
        code:"componentDidMount() { fetch('https://jsonplaceholder.typicode.com/users'), .then(response => response.json()).then(jsonfile => this.setState({users:jsonfile}))};",
        text:"Cette méthode est appelée par React lui-même, pour récupérer les données depuis une API externe"
    },
    {
        id: 1,
        title:"fetch()",
        code:"fetch('https://jsonplaceholder.typicode.com/users')",
        text:"Récupérer des ressources à travers le réseau de manière asynchrone."
    },
    {
        id: 2,
        title:"Destructuring Method",
        code:"const {users, searchfield} = this.state;",
        text:"à la place de 'const users = this.state.users','const searchfield = this.state.searchfield'"
    },
    {
        id: 3,
        title:"onChange()",
        code:'onchange={(e) => {this.setState({searchfield: e.target.value}, () => console.log(this.state));}',
        text:"écoute tous les changements sur l'élément"
    },
    {
        id: 4,
        title:".filter()",
        code:"const {users, searchfield} = this.state; const usersfiltered = users.filter(user =>user.name.toLowerCase().includes(searchfield.toLowerCase()));",
        text:"usersfiltered est une fonction pour dire user.name inclue au moins des caractères de searchfield. Et les deux sont en lower case"
    },
    {
        id: 5,
        title:".props",
        code:"Dans le parent <h1>Bonjour, {this.props.name}</h1>, dans l'enfant <h1>Bonjour, {props.name}</h1>",
        text:"« props » (qui signifie « propriétés ») contenant des données"
    },
    {
        id: 6,
        title:".props",
        code:"import PropTypes from 'prop-types';\n" +
            "\n" +
            "class Greeting extends React.Component {\n" +
            "  render() {\n" +
            "    return (\n" +
            "      <h1>Bonjour, {this.props.name}</h1>\n" +
            "    );\n" +
            "  }\n" +
            "}\n" +
            "\n" +
            "Greeting.propTypes = {\n" +
            "  name: PropTypes.string\n" +
            "};",
        text:"To be continued..."
    },
]