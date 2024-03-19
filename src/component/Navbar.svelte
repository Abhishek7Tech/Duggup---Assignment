<script lang="ts">
	import * as Menubar from '$lib/components/ui/menubar/index.js';
	import UserBar from './Userbar.svelte';
	import Buttons from './Buttons.svelte';
	interface Quote {
  img: string;
  quote: string;
}

interface Position {
  id: string;
  date: string;
  img: string;
  companyName: string;
  location: string;
  status: string;
  joining: string;
  currentCompany: boolean;
  quotes: Quote[];
  position: string;
  jobType: string;
}

interface Details {
  id: number;
  name: string;
  label: string;
  profilePicture: string;
  profilePictureFull: string;
  bio: string;
  positions: Position[];
  logo: string;
  logoName: string;
}
	export let userInfo:Details[];
	// const currentCompany = $userInfo.positions?.filter((company: { currentCompany: boolean; }) => company.currentCompany === true);
	console.log("USERINFO NAVBAR", userInfo);
	
	const companyLogo = userInfo[0].logo;
	const companyName = userInfo[0].logoName;
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

	<Menubar.Root class="mx-16 flex h-16 justify-between border-2 border-x-0 border-dotted">
		<div class="flex gap-2 items-center">
			<img src={companyLogo} alt= {`${companyName} logo`} />
			<h3 class="font-medium font-inter">{companyName}</h3>
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
				<UserBar userData={userInfo}/>
			</Menubar.Menu>
		</div>
	</Menubar.Root>
</nav>
