<script lang="ts">

	import Careertimeline from './Careertimeline.svelte';
	import Careerhiglights from './Careerhiglights.svelte';
	
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
	/**
	 * @type {never[]}
	 */
	// const positions = $userInfo.positions;
	const positions = userInfo[0].positions;

</script>

<aside class="flex mx-auto w-fit">
	<Careertimeline positions={positions}/>

	<Careerhiglights positions={positions}/>
</aside>
