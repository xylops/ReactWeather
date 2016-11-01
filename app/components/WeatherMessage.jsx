var React = require('react');

// var WeatherMessage = React.createClass({
//     render:function(){
//         var location = this.props.location;
//         var temp = this.props.temp;
//
//         return(
//             <h2>The Temperature for {location} is {temp}</h2>
//         )
//     }
// });

var WeatherMessage = ({temp, location}) => {

    // var {location, temp} = props;

    return(
        <h2 className="text-center">It is {temp} in {location}</h2>
    )
}

module.exports=WeatherMessage;
