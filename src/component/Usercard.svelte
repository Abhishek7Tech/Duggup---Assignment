<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Avatar from '$lib/components/ui/avatar';
	import Buttons from './Buttons.svelte';
	import { userInfo } from '../stores';

 const name = $userInfo[0].name;
 const profilePicture = $userInfo[0].profilePictureFull;
 const userBio= $userInfo[0].bio;
 const currentCompany =  $userInfo[0].positions.filter((info) => info.currentCompany === true);
 const currentCompanyName = currentCompany[0].companyName;
 const jobTitle = currentCompany[0].position; 
</script>

<Card.Root class="mx-auto my-8 flex w-[984px] justify-between border-0">
	<Card.Header>
		<div class="w-min flex-col">
			<Avatar.Root class="h-24 w-24 rounded-full border-2 border-secondary">
				<Avatar.Image src={profilePicture} alt={`user ${name}`} />
				<Avatar.Fallback>{name.slice(0,2).toUpperCase()}</Avatar.Fallback>
			</Avatar.Root>
			<h1 class="text-center text-2xl font-bold">{name}</h1>
		</div>
	</Card.Header>
	<div class="flex flex-col justify-center">
		<Card.Content class="flex gap-4 align-middle">
			<p class="w-[584px] self-center text-sm font-normal">
				{userBio}
			</p>
			<div class="flex flex-col items-end self-center">
				<img class="h-9 w-9" src="/company-2.png" alt="duggup-logo" />
				<h3 class="text-base font-bold">{currentCompanyName}</h3>
				<small class="text-xs text-slate-400">{jobTitle}</small>
			</div>
		</Card.Content>
		<Card.Footer class="flex justify-between">
			<Buttons text={'Followed'} icon={false}></Buttons>
			<div class="flex gap-4 items-center">
				<div class="flex gap-2 items-center">
					<small class="text-sm font-normal text-black">My website</small>
                    <!-- svelte-ignore a11y-invalid-attribute -->
                    <a class="" href="#"><img class="h-3" src='/website-icon.png' alt='website link icon' /></a>
				</div>
                <a href="#"><img class="w-3" src='/nav-icon.png' alt='more icon' /></a>

			</div>
		</Card.Footer>
	</div>
</Card.Root>
