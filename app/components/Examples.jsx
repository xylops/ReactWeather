var React = require('react');
var {Link} = require('react-router')
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
            <h1 className="text-center page-title">Examples</h1>
            <p className>There are a few Example Loactions to try out</p>
            <ul>
                <li>
                    <Link to='/?location=Taipei'>Taipei, TW</Link>
                </li>
                <li>
                    <Link to='/?location=japan'>Japan, JPN</Link>
                </li>
            </ul>
        </div>

    );
}

module.exports = Examples;
