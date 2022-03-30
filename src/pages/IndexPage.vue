<template>
	<q-page>
		<div class="column items-center justify-center" style="height:99vh">
			<span class="text-h6">Hello {{  user?.user_metadata.name }}</span>
		</div>
  	</q-page>
</template>

<script setup>

import useAuthUser from 'src/composables/useAuthUser';

	const { user } = useAuthUser();

</script>
