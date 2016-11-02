var React = require('react');
var {Link} = require('react-router');

// var Nav = React.createClass({
//     render:function(){
//         return(
//             <div>
//                 <h2>Nav Compnent</h2>
//                 <Link to="/">Get Weather</Link>
//                 <Link to="/about">About</Link>
//                 <Link to="/examples">Examples</Link>
//             </div>
//
//
//         );
//     }
// });

var Nav = React.createClass({
    onSearch:function(e){
        e.preventDefault;
        var menuBarSearchInput = this.refs.menuBarSearchInput.value;
        var encodeLoaction = encodeURI(menuBarSearchInput);

        if(menuBarSearchInput.length>0){
            this.refs.menuBarSearchInput.value ='';
            window.location.hash='#/?location='+encodeLoaction;
        }
    },
    render:function(){
        return(
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li><Link to="/">Get Weather</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/examples">Examples</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" ref="menuBarSearchInput" placeholder="Search Weather By City"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
})

module.exports = Nav;
