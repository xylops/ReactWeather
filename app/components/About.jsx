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
            <p>The Code could be found in </p>
            <a href="https://github.com/xylops/ReactWeather">https://github.com/xylops/ReactWeather</a>
        </div>
    );
};

module.exports = About;
