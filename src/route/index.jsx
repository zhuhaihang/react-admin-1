import React from 'react'
import { Route } from 'react-router-dom';
import AuthRouter from '@/component/authRouter';
import Bundle from '@/component/loadable';

import Cropper from '@/page/other/cropper'
const Index = Bundle(() => import(/* webpackChunkName: "index" */ '@/page/index'));
const Form = Bundle(() => import(/* webpackChunkName: "form" */ '@/page/component/form'));
const Table = Bundle(() => import(/* webpackChunkName: "table" */ '@/page/component/table'));
const Layout = Bundle(() => import(/* webpackChunkName: "layout" */ '@/page/component/layout'));
const Tooltip = Bundle(() => import(/* webpackChunkName: "tooltip" */ '@/page/component/tooltip'));
const Auth = Bundle(() => import(/* webpackChunkName: "auth" */ '@/page/business/auth'));
const Operation = Bundle(() => import(/* webpackChunkName: "operation" */ '@/page/business/operation'));
// const Cropper = Bundle(() => import(/* webpackChunkName: "cropper" */ '@/page/other/cropper'));
const Editor = Bundle(() => import(/* webpackChunkName: "editor" */  '@/page/other/editor'));
const Map = Bundle(() => import(/* webpackChunkName: "map" */  '@/page/other/map'));
const Chart = Bundle(() => import(/* webpackChunkName: "chart" */  '@/page/other/chart'));

export default class Routes extends React.Component {
	render() {
		return (
			<div>
				<Route exact path="/admin/index" component={Index}/>
				<Route exact path="/admin/component/form" component={Form}/>
				<Route exact path="/admin/component/table" component={Table}/>
				<Route exact path="/admin/component/layout" component={Layout}/>
				<Route exact path="/admin/component/tooltip" component={Tooltip}/>
				<AuthRouter exact path="/admin/business/auth" component={Auth}/>
				<Route exact path="/admin/business/operation" component={Operation}/>
				<Route exact path="/admin/other/cropper" component={Cropper}/>
				<Route exact path="/admin/other/editor" component={Editor}/>
				<Route exact path="/admin/other/map" component={Map}/>
				<Route exact path="/admin/other/chart" component={Chart}/>
				<Route exact path="/admin/tool/chat" render={() => <h1>待开发</h1>}/>
				{/* react 4.0路由特性: 子路由地址前缀必须带上父路由地址 */}
		  </div>
		)
	}
}