var React = require('react');
var ReactDOM = require('react-dom');
var Nav = require('Nav');

// var Main = React.createClass({
//     render : function(){
//         return(
//             <div>
//                 <Nav></Nav>
//                 <h2>Main Component</h2>
//                 {this.props.children}
//             </div>
//         );
//     }
// });

var Main = (props) => {
    return(
        <div>
            <Nav></Nav>
            <div className="row">
                <div className="colums medium-6 large-4 small-centered">
                    {props.children}
                </div>
            </div>

        </div>
    );
}

module.exports = Main;
