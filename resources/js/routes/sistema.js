const routes = [
	// HOME
	{
		path: '/home',
		component: () => import(/* webpackChunkName: 'app/Home' */ '_app/Home'),
	},
];

export default routes;
