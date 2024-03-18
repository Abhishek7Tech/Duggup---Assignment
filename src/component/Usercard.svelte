<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Avatar from '$lib/components/ui/avatar';
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
	export let userInfo: Details[];
	const userName = userInfo[0].name;
	const profilePicture = userInfo[0].profilePictureFull;
	const userBio = userInfo[0].bio;
	const currentCompany = userInfo[0].positions.filter((info: { currentCompany: boolean; }) => info.currentCompany === true);
	const jobTitle = currentCompany[0].position;
	const currentCompanyLogo = currentCompany[0].img;
	const currentCompanyName = currentCompany[0].companyName;
</script>

<Card.Root class="mx-auto my-8 flex w-[984px] justify-between border-0 font-inter">
	<Card.Header>
		<div class="w-min flex-col">
			<Avatar.Root class="h-24 w-24 rounded-full border-2 border-secondary">
				<Avatar.Image src={profilePicture} alt={`user-${userName}`} />
				<Avatar.Fallback>{userName.slice(0,2).toUpperCase()}</Avatar.Fallback>
			</Avatar.Root>
			<h1 class="text-center text-2xl font-bold">{userName}</h1>
		</div>
	</Card.Header>
	<div class="flex flex-col justify-center">
		<Card.Content class="flex gap-4 align-middle">
			<p class="w-[584px] self-center text-sm font-normal leading-6">
				{userBio}
			</p>
			<div class="flex flex-col items-end self-center">
				<img class="h-9 w-9" src={currentCompanyLogo} alt={`${currentCompanyName} logo`} />
				<h3 class="text-base font-bold">{userName}</h3>
				<small class="text-xs text-slate-400">{jobTitle}</small>
			</div>
		</Card.Content>
		<Card.Footer class="flex justify-between">
			<Buttons text={'Followed'} icon={false}></Buttons>
			<div class="flex items-center gap-4">
				<div class="flex items-center gap-2">
					<small class="text-sm font-normal text-black">My website</small>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a class="" href="#"
						><img class="h-3" src="/website-icon.png" alt="website link icon" /></a
					>
				</div>
				<a href="#"><img class="w-3" src="/nav-icon.png" alt="more icon" /></a>
			</div>
		</Card.Footer>
	</div>
</Card.Root>
