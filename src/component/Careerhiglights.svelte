<script>
	import ChevronsUp from 'lucide-svelte/icons/chevron-up';
	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
	} from '$lib/components/ui/svelte-vertical-timeline';
	// @ts-ignore
	import Quotescard from './Quotescard.svelte';
	import Positioncard from './Positioncard.svelte';
	import { userInfo } from '../stores';

	/**
	 * @type {any}
	 */
	 export let positions;
</script>

<Timeline style="margin-right:140px" position="left">
    {#each positions as position}
        

        <!-- DATE START -->
        <TimelineItem >
            <TimelineSeparator></TimelineSeparator>
            <TimelineContent style="margin-top: 0px;">
                <Quotescard quotesArray={position.quotes} />
            </TimelineContent>
        </TimelineItem>
        <!-- DATE END -->

        <!-- ARROW START -->
        <TimelineItem >
            <TimelineSeparator></TimelineSeparator>
            <TimelineContent></TimelineContent>
        </TimelineItem>
        <!-- ARROW END -->

            <!-- EMPTY START -->
        <TimelineItem >
            <TimelineSeparator></TimelineSeparator>
            <TimelineContent></TimelineContent>
        </TimelineItem>
        <!-- EMPTY END -->

            <!-- EMPTY START --> 
         <TimelineItem >
            <TimelineSeparator></TimelineSeparator>
            <TimelineContent></TimelineContent>
        </TimelineItem> 
        <!-- EMPTY END

        <!-- CONTENT START -->
        <TimelineItem >
            <TimelineSeparator></TimelineSeparator>
            <TimelineContent style="margin-top:0px;">
                <Positioncard position={position.position} jobType={position.jobType} />
            </TimelineContent>
        </TimelineItem>
        <!-- CONTENT END -->
        <!-- EMPTY START -->
        <TimelineItem style="min-height:75px;">
            <TimelineSeparator></TimelineSeparator>
            <TimelineContent></TimelineContent>
        </TimelineItem>
        <!-- EMPTY END -->
    {/each}
</Timeline>