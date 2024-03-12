<script lang="ts" >
  import { Button } from "$lib/components/ui/button/index.js";
 export let text: string;
  export let icon: boolean;
</script>


<Button class="bg-card gap-4 rounded-sm border border-b-4 border-black h-8 hover:bg-secondary">
    {#if icon}
    <!-- svelte-ignore missing-declaration -->
    <img class="h-4" src='/post-icon.png' alt='post icon' />

    {/if}
   <span class="text-primary text-sm font-normal font-inter">{text}</span> 
  </Button>