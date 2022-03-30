<template>
	<q-page padding>
		<q-form  @submit.prevent="handleLogin" class="row justify-center">
			<p class="col-xs-12 text-h5 text-center">Register</p>			
			<div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
				<q-input v-model="form.name" type="text" label="Name" lazy-rules=""
					:rules="[val => (val && val.length > 0) || 'Name is required']"/>
				<q-input v-model="form.email" type="email" label="Email" lazy-rules=""
					:rules="[val => (val && val.length > 0) || 'Email is required']"/>
				<q-input v-model="form.password" type="password" label="Password" lazy-rules=""
					:rules="[val => (val && val.length >= 6) || 'Password is required and 6']"/>
				<div class="full-width q-pt-md q-gutter-y-md">
					<q-btn color="primary" label="Register" class="full-width" outline rounded type="submit"/>
					<q-btn color="primary" flat label="Home" class="full-width" outline rounded :to="{name:'login'}"/>
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

	const { notifyError, notifySuccess } = useNotify();
	const router = useRouter();
	const { register } = useAuthUser();
	const form = ref({
		name:'',
		email:'',
		password:''
	});

	const handleLogin =  async () => {
		try {
			await register(form.value);
			notifySuccess();
			router.push({
				name:'email-confirmation',
				query:{ email: form.value.email }
			});
		} catch (error) {			
			notifyError(error.message);
		}
	}

</script>
