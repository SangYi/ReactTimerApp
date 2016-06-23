var React = require('react');
var Navagation = require('Navagation');

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <Navagation />
          <p>Main.jsx Rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  );
}
module.exports = Main;
