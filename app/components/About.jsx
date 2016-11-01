var React = require('React');

// var About = React.createClass({
//     render:function(){
//         return(
//             <h3>About Compnent</h3>
//         );
//     }
// });

var About = (props) => {
    return(
        <div>
            <h3>About</h3>
            <p>Welcome to the About Page</p>
        </div>
    );
};

module.exports = About;
