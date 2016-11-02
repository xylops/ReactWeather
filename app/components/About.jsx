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
            <h1 className="text-center page-title">About</h1>
            <p>The Code could be found in </p>
            <a href="https://github.com/xylops/ReactWeather">https://github.com/xylops/ReactWeather</a>
            <p>The Weather API that this app using is</p>
            <a href="http://openweathermap.org/">http://openweathermap.org</a>
        </div>
    )
};

module.exports = About;
