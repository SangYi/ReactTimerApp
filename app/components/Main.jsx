var React = require('react');
var Navagation = require('Navagation');

var Main = (props) => {
  return (
    <div>
      <Navagation />
      <div className="row">
        <div className="column small-centered medium-6 large-4">          
          {props.children}
        </div>
      </div>
    </div>
  );
}
module.exports = Main;
