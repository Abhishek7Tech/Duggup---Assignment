<script lang="ts">
export let position:string;
export let jobType: string;
</script>

<div class="rounded-xl text-justify px-5 pb-2 w-[713px] h-[83px] bg-card font-inter">
    <h1 class="font-bold text-xl ">{position}</h1>
    <small class="text-xs font-normal text-texts">{jobType}</small>
</div>