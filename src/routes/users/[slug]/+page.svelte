<script>
  import '../../../app.pcss';

	import Navbar from '../../../component/Navbar.svelte';
    import Career from '../../../component/Career.svelte';
	import Usercard from '../../../component/Usercard.svelte';

    export let data;
    console.log("DATA__USERS", data);
    const userInfo = data.user.details;
</script>
<Navbar userInfo = {userInfo}/>
<Usercard userInfo = {userInfo}/>
<Career userInfo = {userInfo}/>