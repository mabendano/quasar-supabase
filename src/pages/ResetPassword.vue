<template>
	<q-page padding>
		<q-form  @submit.prevent="handlePasswordReset" class="row justify-center">
			<p class="col-xs-12 text-h5 text-center">Reset Password</p>			
			<div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">				
				<q-input v-model="form.password" type="password" label="New Password" />				
				<div class="full-width q-pt-md">
					<q-btn color="primary" label="save" class="full-width" outline rounded type="submit"/>
				</div>				
			</div>					
		</q-form>
  	</q-page>
</template>

<script setup>

import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import useAuthUser from 'src/composables/useAuthUser';

	const router = useRouter();
	const route = useRoute();
	const { resetPassword } = useAuthUser();
	const form = ref({		
		password:''
	});

	const handlePasswordReset =  async () => {
		try {
			await resetPassword(route.query.token, form.value.password);
			router.push({name:'login'});
		} catch (error) {			
			alert(error.message);
		}
	}

</script>
