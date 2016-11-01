var React = require('React');

// var Examples = React.createClass({
//     render:function(){
//         return(
//             <h3>Examples Compnent</h3>
//         );
//     }
// });

var Examples = (props) => {
    return(
        <div>
            <h3>Examples</h3>
            <p>Welcome to Example page</p>
        </div>

    );
}

module.exports = Examples;
