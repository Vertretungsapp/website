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

<svelte:head>
	<meta name="description" content="Vertretungsapp ist deine Alternative zu VpMobil. Neben den klassischen Funktionen kannst du nun auch Raum- und Lehrerpläne einsehen und viele weiter Features nutzen, die deinen Alltag vereinfachen." />
	<meta name="keywords" content="Vertretungsapp, VpMobil, Vertretungsplan, Vertretungspläne, Vertretungsplanapp, Indiware, App" />
	<meta name="author" content="Vertretungsapp Development" />
	<meta name="robots" content="index, nofollow" />
</svelte:head>

<section class="w-full flex items-stretch justify-center lg:justify-between lg:items-center flex-col lg:flex-row py-4 min-h-dvh gradient-1-light dark:gradient-1-dark">
	<div class="w-full order-2 lg:order-1 flex items-center justify-center relative p-16">
		<div class="relative group flex flex-col">
			{#if loaded}
				<div class="lg:absolute py-8 order-2 block left-32 top-16 group-hover:z-10" transition:fly={{duration: 1000, x: -200}}>
					<DeviceMockup device="ios">
						<img class="w-full h-full hidden dark:block" src="/screenshots/plan_dark.png" alt="Screenshot Planansicht" />
						<img class="w-full h-full block dark:hidden" src="/screenshots/plan_light.png" alt="Screenshot Planansicht" />
					</DeviceMockup>
				</div>

				<div class="order-1" transition:fly={{delay: 200,duration: 1000, x: -200}}>
					<DeviceMockup device="ios">
						<img class="w-full h-full hidden dark:block" src="/screenshots/home_dark.png" alt="Screenshot Homescreen" />
						<img class="w-full h-full block dark:hidden" src="/screenshots/home_light.png" alt="Screenshot Homescreen" />
					</DeviceMockup>
				</div>
			{/if}
		</div>
	</div>
	<div class="w-full order-1 flex py-8 flex-col gap-2 text-center lg:text-left">
		<h1 class="text-4xl lg:text-7xl">Vertretungsapp<span class="text-primary">.</span></h1>
		<h2 class="text-xl lg:text-2xl">Deine Alternative zu VpMobil!</h2>
		<div class="flex items-center flex-col lg:flex-row gap-2 items-full-width px-8 lg:p-0 [&>*]:w-full lg:[&>*]:w-auto">
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
