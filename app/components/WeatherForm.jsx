var React = require('react');
var ReactDOM = require('react-dom');

var WeatherForm = React.createClass({

    onFormSubmit : function(e){
        e.preventDefault();
        var location = this.refs.location.value;

        if(location.length > 0){
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },

    render:function(){
        return(
            <form onSubmit = {this.onFormSubmit}>
                <input type="text" ref="location" placeholder="Please Enter City"/>
                <br/>
                <button type="submit" >Check Weather</button>
            </form>
        )
    },
});

module.exports = WeatherForm;
