<script lang="ts">
	import Careertimeline from './Careertimeline.svelte';
	import Careerhiglights from './Careerhiglights.svelte';
	import type { Details } from '../types/types';

	export let userInfo: Details[];
	/**
	 * @type {never[]}
	 */
	// const positions = $userInfo.positions;
	const positions = userInfo[0].positions;
</script>

<aside class="mx-auto flex w-fit">
	<Careertimeline {positions} />

	<Careerhiglights {positions} />
</aside>
