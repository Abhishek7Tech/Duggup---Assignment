<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Avatar from '$lib/components/ui/avatar';
	import Buttons from './Buttons.svelte';
</script>

<Card.Root class="mx-auto my-8 flex w-[984px] justify-between border-0">
	<Card.Header>
		<div class="w-min flex-col">
			<Avatar.Root class="h-24 w-24 rounded-full border-2 border-secondary">
				<Avatar.Image src="/krishna-kiran-full.png" alt="user krishna kiran" />
				<Avatar.Fallback>KR</Avatar.Fallback>
			</Avatar.Root>
			<h1 class="text-center text-2xl font-bold">Krishna Kiran</h1>
		</div>
	</Card.Header>
	<div class="flex flex-col justify-center">
		<Card.Content class="flex gap-4 align-middle">
			<p class="w-[584px] self-center text-sm font-normal">
				Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of
				Engineering. I write hot-takes on building a business, shipping delightful products and
				accelerating product and career growth.
			</p>
			<div class="flex flex-col items-end self-center">
				<img class="h-9 w-9" src="/company-2.png" alt="duggup-logo" />
				<h3 class="text-base font-bold">Duggup</h3>
				<small class="text-xs text-slate-400">Co-Founder and CEO</small>
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
