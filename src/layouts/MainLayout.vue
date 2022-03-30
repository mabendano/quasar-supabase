<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      	<q-toolbar>
			<q-btn
			flat
			dense
			round
			icon="menu"
			aria-label="Menu"
			@click="toggleLeftDrawer"
			/>

			<q-toolbar-title>
			Quasar App
			</q-toolbar-title>

			<q-btn-dropdown color="white" flat icon="person">
				<q-list>
					<q-item clickable v-close-popup @click="handleLogout">
						<q-item-section>
							<q-item-label>Logout</q-item-label>
						</q-item-section>
					</q-item>        
				</q-list>
			</q-btn-dropdown>
    	</q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Supabase
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
</q-layout>
</template>

<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import EssentialLink from 'src/components/EssentialLink.vue';
import useAuthUser from 'src/composables/useAuthUser';

	const $q = useQuasar();
	const { logout } = useAuthUser();
	const router = useRouter();
	const essentialLinks = [
		{
			title: 'Docs',
			caption: 'quasar.dev',
			icon: 'school',
			link: 'https://quasar.dev'
		},
	];

    const leftDrawerOpen = ref(false);

    function toggleLeftDrawer () {
    	leftDrawerOpen.value = !leftDrawerOpen.value
	}

	const handleLogout = () => {		
		$q.dialog({
			title: 'Confirm',
			message: 'Do you really want to leave ?',
			cancel: true,
			persistent: true
		}).onOk(async () => {
			await logout();
			router.replace({name:'login'});
		});
	}


</script>
