
const routes = [
	{
		path: '/',
		component: () => import('layouts/LoginLayout.vue'),
		children: [
			{ path: '', name:'login_default', component: () => import('pages/LoginPage.vue') },
			{ path: 'login', name:'login', component: () => import('pages/LoginPage.vue') },
			{ path: 'register', name:'register', component: () => import('pages/RegisterPage.vue') },
			{ path: 'email-confirmation', name:'email-confirmation', component: () => import('pages/EmailConfirmationPage.vue') },
			{ path: 'me', name:'me', component: () => import('pages/MePage.vue') },
			{ path: 'forgot-password', name:'forgot-password', component: () => import('pages/ForgotPassword.vue') },	
			{ path: 'reset-password', name:'reset-password', component: () => import('pages/ResetPassword.vue') },						
		]
  	},
	{
		path: '/',
		component: () => import('layouts/MainLayout.vue'),
		children: [
			{ path: '/index', name:'index', component: () => import('pages/IndexPage.vue') }
		],
		meta:{
			requiresAuth:true
		}
  	},
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
