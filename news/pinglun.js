import React from "react";
export default class Pinglun extends React.Component{
	constructor(props){
		super(props)
	}
	//组件即将接受新值
	componentWillReceiveProps(a){
		
	}
	//进入DOM 用来写ajax函数
	componentDidMount(){
		
	}
	render(){
		return(
			<div>
				<div style={{borderBottom:"1px solid #ddd"}}>
					<h3 style={{lineHeight:"60px",fontWeight:'900'}}>我的评论</h3>
				</div>
			</div>
		)
	}
}
