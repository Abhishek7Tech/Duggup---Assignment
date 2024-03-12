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

<Timeline style="padding: 6px 4px; flex-grow:unset" position="left">
    {#each positions as position}
        <!-- EMPTY START -->
        <TimelineItem >
            <TimelineSeparator>
                <TimelineConnector
                    style="width: 0px; border-left: 4px dotted #778FB1; background-color:transparent; min-height: 90px"
                />
            </TimelineSeparator>
            <TimelineContent style="background-color:blue; margin-left:100%"></TimelineContent>
        </TimelineItem>
        <!-- EMPTY END -->

        <!-- DATE START -->
        <TimelineItem >
            <TimelineSeparator>
                <TimelineDot style="margin: 0px; border: 3px solid #0066FF; background-color: white; position:relative; right:-5px;" />
                <TimelineConnector
                    style="width: 0px; border-left: 4px dotted #778FB1; background-color:transparent; margin-left:10px"
                />
            </TimelineSeparator>
            <TimelineContent style="margin-top: 0px; margin-left:90%;">
                <h3 style="font-weight: 400; font-size: 12px; line-height: 14.52px; color: #7A9299; width: max-content; font-family:Inter">
                    {position.date}
                </h3>
            </TimelineContent>
        </TimelineItem>
        <!-- DATE END -->

        <!-- ARROW START -->
        <TimelineItem >
            <TimelineSeparator>
                 <TimelineConnector
                    style="width: 0px; border-left: 4px dotted #778FB1; background-color:transparent;margin-left:4px; margin-top:3px;"
                /> 
                <TimelineDot
                    style="margin: 0px; background-color: #fff; border: none; position:relative;"
                >
                    <ChevronsUp style="color:#778FB1; position:absolute; top: -10px; right: -10px;" />
                </TimelineDot>
            </TimelineSeparator>
            <TimelineContent style="margin-left:100%"></TimelineContent>
        </TimelineItem>
        <!-- ARROW END -->

        <!-- CONTENT START -->
        <!-- <div class="mr-7"> -->
        <TimelineItem >
            <TimelineSeparator>
                <div class="absolute">
                    <TimelineDot
                        style="margin: 0px; border: 8px solid #0066FF; background-color: white; width: 28px; height: 27px; position:relative; top: 55px;"
                    />
                </div>
                <TimelineConnector
                    style="width: 0px; border-left: 4px dotted #778FB1; background-color:transparent;"
                />
            </TimelineSeparator>
            <TimelineContent style="margin-left:100%;">
                <div class="mr-2 flex flex-col items-end font-inter">
                    <img src={position.img} alt={position.companyName} class="h-12 w-12" />
                    <h3 class="text-base font-bold">{position.companyName}</h3>
                    <span class="text-xs font-normal text-texts w-max">{position.location}</span>
                    <span class="text-xs font-normal text-texts w-max">{position.status}</span>
                    <span class="text-xs font-normal text-texts w-max">{position.joining}</span>
                </div>
            </TimelineContent>
        </TimelineItem>
    <!-- </div> -->
        <!-- CONTENT END -->
        <!-- EMPTY START -->
        <TimelineItem style="top:4px;">
            <TimelineSeparator>
                <TimelineConnector
                    style="width: 0px; border-left: 4px dotted #778FB1; background-color:transparent;"
                />
            </TimelineSeparator>
            <TimelineContent style="margin-left:100%"></TimelineContent>
        </TimelineItem>
        <!-- EMPTY END -->
        
    {/each}
</Timeline>

