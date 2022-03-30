<template>
	<q-page padding>
		<p>Hello {{ user }}</p>
  	</q-page>
</template>

<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';

import useAuthUser from 'src/composables/useAuthUser';

	const router = useRouter();
	const { user } = useAuthUser();
	console.log(user)


</script>
