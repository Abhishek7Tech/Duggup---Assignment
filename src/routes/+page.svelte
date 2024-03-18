<script lang="ts">
  import '../app.pcss';

	import Career from '../component/Career.svelte';
	import Navbar from '../component/Navbar.svelte';
	import Usercard from '../component/Usercard.svelte';
export let data;
const userInfo = data.user.details;
</script>
<Navbar userInfo = {userInfo}/>
 <Usercard userInfo = {userInfo}/>
 <Career userInfo = {userInfo}/>
