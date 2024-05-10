<script>
	import { Button, DeviceMockup } from 'flowbite-svelte';
	import { ArrowUpRightFromSquareOutline, DiscordSolid, GithubSolid, MailBoxSolid } from 'flowbite-svelte-icons';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let loaded = false;

	onMount(() => {
		loaded = true;
	})
</script>

<section class="w-full flex items-stretch justify-center lg:justify-between lg:items-center flex-col lg:flex-row py-4 min-h-dvh gradient-1-light dark:gradient-1-dark">
	<div class="w-full flex items-center justify-center relative">
		<div class="relative group">
			{#if loaded}
				<div class="absolute left-32 top-16 group-hover:z-10" transition:fly={{duration: 1000, x: -200}}>
					<DeviceMockup device="ios">
						<img class="w-full h-full hidden dark:block" src="/screenshots/plan_dark.png" alt="Screenshot Planansicht" />
						<img class="w-full h-full block dark:hidden" src="/screenshots/plan_light.png" alt="Screenshot Planansicht" />
					</DeviceMockup>
				</div>

				<div transition:fly={{delay: 200,duration: 1000, x: -200}}>
					<DeviceMockup device="ios">
						<img class="w-full h-full hidden dark:block" src="/screenshots/home_dark.png" alt="Screenshot Homescreen" />
						<img class="w-full h-full block dark:hidden" src="/screenshots/home_light.png" alt="Screenshot Homescreen" />
					</DeviceMockup>
				</div>
			{/if}
		</div>
	</div>
	<div class="w-full flex flex-col gap-2">
		<h1 class="text-7xl">Vertretungsapp<span class="text-primary">.</span></h1>
		<h2>Deine Alternative zu VpMobil!</h2>
		<div class="flex items-center gap-2">
			<Button href="https://app.vertretungsapp.de" target="_blank">
				<ArrowUpRightFromSquareOutline class="me-2" /> Zur App
			</Button>

			<Button href="/discord" color="alternative" target="_blank">
				<DiscordSolid class="me-2" /> Discord
			</Button>

			<Button href="/github" color="alternative" target="_blank">
				<GithubSolid class="me-2" /> GitHub
			</Button>

			<Button href="mailto:support@vertretungsapp.de" color="alternative">
				<MailBoxSolid class="me-2" /> Support
			</Button>
		</div>
	</div>
</section>

<style>



</style>
