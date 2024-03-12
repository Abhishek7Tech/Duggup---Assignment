<script>
	// @ts-nocheck
	import ChevronsUp from 'lucide-svelte/icons/chevron-up';
	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from '$lib/components/ui/svelte-vertical-timeline';
	import Quotescard from './Quotescard.svelte';
	import Positioncard from './Positioncard.svelte';

	const positions = [
		{
			id: 1,
			date: 'Dec 2023',
			img: '/company-2.png',
			companyName: 'Duggup',
			location: 'San FranciscoBay Area',
			status: 'Joined',
			joining: 'Nov 2023',
			quotes: [
				{
					img: '/card-1.png',
					quote: 'No amount of technology can convert a bad story into a good story.'
				},
				{
					img: '/card-2.png',
					quote:
						"Most people don't have original ideas. Here is how Sam Altman pushes himself to have unpopular ideas."
				}
			],
			position: 'Co-Founder and CEO',
			jobType: 'Full-time Remote'
		},
		{
			id: 2,
			date: 'Dec 2023',
			img: '/company-1.png',
			companyName: 'BetterUp',
			location: 'San FranciscoBay Area',
			status: 'Joined',
			joining: 'Sep 2022',
			quotes: [
				{
					img: '/card-3.png',
					quote: `Startup Lesson I am reflecting. Don't build for the "average person".`
				},
				{
					img: '/card-4.png',
					quote: 'Your biggest regrets at 80 will be acts of omission.'
				}
			],
			position: 'VP Engineering',
			jobType: 'Full-time'
		}
	];
</script>

<aside class="flex">
	<Timeline position="left">
		{#each positions as position}
			<!-- EMPTY START -->
			<TimelineItem style="left: 20px;">
				<TimelineSeparator>
					<TimelineConnector
						style="width: 0px; border-left: 4px dotted #778FB1; background-color:transparent; min-height: 90px"
					/>
				</TimelineSeparator>
				<TimelineContent></TimelineContent>
			</TimelineItem>
			<!-- EMPTY END -->

			<!-- DATE START -->
			<TimelineItem style="left: 20px;">
				<TimelineSeparator>
					<TimelineDot style="margin: 0px; border: 3px solid #0066FF; background-color: white;" />
					<TimelineConnector
						style="width: 0px; border-left: 4px dotted #778FB1; background-color:transparent;"
					/>
				</TimelineSeparator>
				<TimelineContent style="margin-top: 0px">
					<h3 style="font-weight: 400; font-size: 12px; line-height: 14.52px; color: #7A9299;">
						{position.date}
					</h3>
				</TimelineContent>
			</TimelineItem>
			<!-- DATE END -->

			<!-- ARROW START -->
			<TimelineItem style="left: 20px; top:4px;">
				<TimelineSeparator>
					<TimelineConnector
						style="width: 0px; border-left: 4px dotted #778FB1; background-color:transparent;"
					/>
					<TimelineDot
						style="margin: 0px; background-color: #fff; border: none; position:relative;"
					>
						<ChevronsUp style="color:#778FB1; position:absolute; top: -10px; right: -8px;" />
					</TimelineDot>
				</TimelineSeparator>
				<TimelineContent></TimelineContent>
			</TimelineItem>
			<!-- ARROW END -->

			<!-- CONTENT START -->
			<TimelineItem style="left: 20px;">
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
				<TimelineContent>
					<div class="mr-2 flex flex-col items-end">
						<img src={position.img} alt={position.companyName} class="h-12 w-12" />
						<h3 class="text-base font-bold">{position.companyName}</h3>
						<h4 class="text-xs font-normal text-texts">{position.location}</h4>
						<h4 class="text-xs font-normal text-texts">{position.status}</h4>
						<h5 class="text-xs font-normal text-texts">{position.joining}</h5>
					</div>
				</TimelineContent>
			</TimelineItem>
			<!-- CONTENT END -->
			<!-- EMPTY START -->
			<TimelineItem style="left: 20px; top:4px;">
				<TimelineSeparator>
					<TimelineConnector
						style="width: 0px; border-left: 4px dotted #778FB1; background-color:transparent;"
					/>
				</TimelineSeparator>
				<TimelineContent></TimelineContent>
			</TimelineItem>
			<!-- EMPTY END -->
		{/each}
	</Timeline>

	<Timeline position="left">
		{#each positions as position}
			

			<!-- DATE START -->
			<TimelineItem style="right:100px;">
				<TimelineSeparator></TimelineSeparator>
				<TimelineContent style="margin-top: 0px">
					<Quotescard quotesArray={position.quotes} />
				</TimelineContent>
			</TimelineItem>
			<!-- DATE END -->

			<!-- ARROW START -->
			<TimelineItem style="right:100px;">
				<TimelineSeparator></TimelineSeparator>
				<TimelineContent></TimelineContent>
			</TimelineItem>
			<!-- ARROW END -->

            	<!-- EMPTY START -->
			<TimelineItem style="right:100px;">
				<TimelineSeparator></TimelineSeparator>
				<TimelineContent></TimelineContent>
			</TimelineItem>
			<!-- EMPTY END -->

            	<!-- EMPTY START --> 
			 <TimelineItem style="right:100px;">
				<TimelineSeparator></TimelineSeparator>
				<TimelineContent></TimelineContent>
			</TimelineItem> 
			<!-- EMPTY END

			<!-- CONTENT START -->
			<TimelineItem style="right:100px;">
				<TimelineSeparator></TimelineSeparator>
				<TimelineContent style="margin-top:0px;">
					<Positioncard position={position.position} jobType={position.jobType} />
				</TimelineContent>
			</TimelineItem>
			<!-- CONTENT END -->
			<!-- EMPTY START -->
			<TimelineItem style="right:100px; min-height:75px;">
				<TimelineSeparator></TimelineSeparator>
				<TimelineContent></TimelineContent>
			</TimelineItem>
			<!-- EMPTY END -->
		{/each}
	</Timeline>
</aside>
