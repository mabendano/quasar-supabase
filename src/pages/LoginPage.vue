<template>
	<q-page padding>
		<q-form  @submit.prevent="handleLogin" class="row justify-center">
			<p class="col-xs-12 text-h5 text-center">Login</p>			
			<div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
				<q-input 
					v-model="form.email" 
					type="email" 
					label="Email" 
					lazy-rules=""
					:rules="[val => (val && val.length > 0) || 'Email is required']"
				/>
				<q-input 
					v-model="form.password" 
					type="password" 
					label="Password" 
					lazy-rules=""
					:rules="[val => (val && val.length > 0) || 'Password is required']"
				/>
				<div class="full-width q-pt-md">
					<q-btn color="primary" label="Login" class="full-width" outline rounded type="submit"/>
				</div>
				<div class="full-width q-gutter-y-md">
					<q-btn color="primary" label="Register" class="full-width" flat rounded to="/register" size="sm" />
					<q-btn color="primary" label="Forgot password ?" class="full-width" flat rounded to="/forgot-password" size="sm" />
				</div>				
			</div>					
		</q-form>
  	</q-page>
</template>

<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';

import useAuthUser from 'src/composables/useAuthUser';
import useNotify from 'src/composables/useNotify';

	const router = useRouter();
	const { notifyError, notifySuccess } = useNotify();
	const { login } = useAuthUser();
	const form = ref({
		email:'marcovinab@gmail.com',
		password:'chirusa01061979'
	});

	const handleLogin =  async () => {
		try {
			await login(form.value);
			notifySuccess('Login successfully');
			router.push({name:'index'});
		} catch (error) {			
			notifyError(error.message);
		}
	}

</script>
