<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type {Quotes} from "../types/types";

	
	export let quotesArray: Quotes[] = [];

	const updatedArray = quotesArray.map((quotes) => {
        let newQuote = quotes.quote.length > 80 ? quotes.quote.slice(0, 85)+"..." : quotes.quote
        return {
            img: quotes.img,
            quote: newQuote
        }
     }

     );
</script>

<section class="flex gap-8 font-inter">
	{#each updatedArray as quote}
		<div class="h-[60px] w-[344px] rounded-xl">
			<Card.Root>
				<Card.Header class="p-0">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img class="w-[344px] h-[136px]" src={quote.img} alt="quotes image" />
				</Card.Header>
				<Card.Content class="py-0 px-2">
					<p class="text-sm font-normal px-3 py-4 text-justify">{quote.quote}</p>
				</Card.Content>
			</Card.Root>
		</div>
	{/each}
</section>
