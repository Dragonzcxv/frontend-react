import React from "react";
import "./example.scss";

class Example extends React.Component {
	render() {
		return (
			<div className="b-example">
				<div className="b-example__stretch-all l-stretch-all">На всю ширину</div>
				<div className="b-example__stretch-left l-stretch-left">На всю ширину слева</div>
				<div className="b-example__stretch-right l-stretch-right">На всю ширину справа</div>
			</div>
		);
	}
}

export default Example;
