<script lang="ts">
	import ChevronsDown from 'lucide-svelte/icons/chevron-down';
	import * as Command from '$lib/components/ui/command/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { cn } from '$lib/utils.js';
	import { tick } from 'svelte';
	import Check from 'lucide-svelte/icons/check';
	import * as Avatar from '$lib/components/ui/avatar';
	import { usersNames } from '../stores';
	import type {Users} from "../types/types";

	export let userData;
	const profilePicture = userData[0].profilePicture;
	const userName = userData[0].name;
	
	let users: Users[] = [];

		usersNames.subscribe((info) => users = info);
	
	// const users = [
	// 	{
	// 		value: $userInfo[0].name,
	// 		label: $userInfo[0].name.toLowerCase()
	// 	},
		
	// 	// {
	// 	// 	value: 'Elon Musk',
	// 	// 	label: 'Elon musk'
	// 	// },
	// 	// {
	// 	// 	value: 'USER-4',
	// 	// 	label: 'user-4'
	// 	// }
	// ];

	// const users = usersData;
	let open = false;
	let value = userName;
	$: selectedValue = users.find((f) => f.value === value)?.value ?? 'More Profiles...';
	function closeAndFocusTrigger(triggerId: string) {
		open = false;
		tick().then(() => {
			document.getElementById(triggerId)?.focus();
		});
	}

</script>

<div class="flex gap-1 ">
    <Avatar.Root class="border rounded-full border-black">
        <Avatar.Image src={profilePicture} alt={`user-${userName}`} />
        <Avatar.Fallback>{userName.slice(0,2).toUpperCase()}</Avatar.Fallback>
    </Avatar.Root>

	<Popover.Root  bind:open let:ids>
		<Popover.Trigger asChild let:builder>
			<Button
				builders={[builder]}
				variant="outline"
				role="combobox"
				aria-expanded={open}
				class="w-[200px] justify-between text-xl border-0"
			>
				{selectedValue}
				<ChevronsDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
			</Button>
		</Popover.Trigger >
		<Popover.Content class="w-[200px] p-0 border-0">
			<Command.Root>
				<Command.Input placeholder="Search framework..." />
				<Command.Empty>No User found.</Command.Empty>
				<Command.Group>
					{#each users as user}
						<Command.Item
							value={user.value}
							onSelect={(currentValue) => {
								value = currentValue;
								closeAndFocusTrigger(ids.trigger);
							}}
							
						>
						<a href={`/users/${user.id.toString()}`} class="flex items-end">
							<Check class={cn('mr-2 h-4 w-4', value !== user.value && 'text-transparent')} />
							{user.value}
							</a>
						</Command.Item>
					{/each}
				</Command.Group>
			</Command.Root>
		</Popover.Content>
	</Popover.Root>
</div>
