<template>
	<q-page padding>
		<q-form  @submit.prevent="handlePasswordReset" class="row justify-center">
			<p class="col-xs-12 text-h5 text-center">Reset password</p>			
			<div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
				<q-input v-model="form.email" type="text" label="Email" />				
				<div class="full-width q-pt-md">
					<q-btn color="primary" label="Send reset email" class="full-width" outline rounded type="submit"/>
				</div>				
			</div>					
		</q-form>
  	</q-page>
</template>

<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';

import useAuthUser from 'src/composables/useAuthUser';

	const router = useRouter();
	const { sendPasswordRestEmail } = useAuthUser();
	const form = ref({
		email:'marcovinab@gmail.com',		
	});

	const handlePasswordReset =  async () => {
		try {
			await sendPasswordRestEmail(form.value.email);
			router.push({name:'login'});
			alert(`Password reset email sent to: ${form.value.email}`);
		} catch (error) {			
			alert(error.message);
		}
	}

</script>
