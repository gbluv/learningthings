import React from 'react';
import styld from 'styled-components';
import './Home.css';

const Parent = styld.div`
  background-color: #f073e1;
	margin: 10px;
	padding: 30px;
	display: flex;
	height: 500px;
	${props => props.theme.parent}
`;

/* flex-direction, flex-wrap */


export default (props) =>{
  console.log(props.theme.parent.color);
  return (<div>
    <Parent className="parent" {...props}>
      <div className="div1">div1</div>
      <div className="div2">w=150px</div>
      <div className="div3">h-150p</div>
      <div className="div4">w/h=150px</div>
      <div className="div5">w=200px</div>
      <div className="div6">w=200px</div>
    </Parent>
  </div>)
};
