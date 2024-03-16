<script lang="ts">
	import * as Menubar from '$lib/components/ui/menubar/index.js';
	import UserBar from './Userbar.svelte';
	import Buttons from './Buttons.svelte';
	import {userInfo} from '../stores';

	console.log("NAV", userInfo)

	const menuItems = [
		{
			id: 1,
			name: 'Home',
			src: '/home-icon.png',
			alt: 'home icon'
		},

		{
			id: 2,
			name: 'Explore',
			src: '/explore-icon.png',
			alt: 'explore icon'
		},

		{
			id: 3,
			name: 'Learn',
			src: '/learn-icon.png',
			alt: 'learn icon'
		},

		
	];
	
</script>

<nav>
	{#each menuItems as items (items.id)}
		<!-- <Menubar.Menu>
			<img src={items.src} alt={items.alt} />
			<Menubar.Trigger class="font-normal">{items.name}</Menubar.Trigger>
		</Menubar.Menu> -->
	{/each}

	<Menubar.Root class="mx-16 flex h-16 justify-between border-2 border-x-0 border-dotted">
		<div class="flex gap-2 items-center">
			<img src={$userInfo[0].logo} alt= {`${$userInfo[0].logoName}-logo`} />
			<h3 class="font-medium font-inter">{$userInfo[0].logoName}</h3>
		</div>
		<div class="flex gap-8">
			{#each menuItems as items (items.id)}
				 <Menubar.Menu>
					<div class="flex items-center">
						<img class="h-4" src={items.src} alt={items.alt} />
						<Menubar.Trigger class="text-sm font-normal font-inter">{items.name}</Menubar.Trigger>
					</div>
				</Menubar.Menu>
			{/each}
			<Menubar.Menu>
				<div class="flex items-center">
                <Buttons text={'Post'} icon={true}>
					
				</Buttons>
				</div>
			</Menubar.Menu>
			<Menubar.Menu>
				<UserBar />
			</Menubar.Menu>
		</div>
	</Menubar.Root>
</nav>
