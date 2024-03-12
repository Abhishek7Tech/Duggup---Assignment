<script>
	import { userInfo } from '../stores';

	const positions = $userInfo[0].positions;
	import Careertimeline from './Careertimeline.svelte';
	import Careerhiglights from './Careerhiglights.svelte';
</script>

<aside class="flex">
	<Careertimeline positions={positions}/>

	<Careerhiglights positions={positions}/>
</aside>
