var React = require('react');
var ReactDOM = require('react-dom')
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
    gtDefaultProps:function(){
        return{
            title:'Error'
        }
    },
    propType:{
        title:React.PropTypes.string,
        message:React.PropTypes.string.isRequire
    },
    componentDidMount:function(){
        var {title, message} = this.props;

        var modalMarkUp = (
            <div className="reveal tiny text-center" id="error-modal" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close=""> Okay </button>
                </p>
            </div>
        )
        //jquery
        var $modal = $(ReactDOMServer.renderToString(modalMarkUp))
        $(ReactDOM.findDOMNode(this)).html($modal)

        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render:function(){
        return(
            <div></div>
        )
    }
});

module.exports = ErrorModal;
