<script>
	import { Button, DarkMode } from 'flowbite-svelte';
</script>

<div class="absolute top-4 right-4">
	<DarkMode />
</div>

<main class="bg-background-light dark:bg-background min-h-fit h-screen overflow-y-auto text-text-light dark:text-text">
	<slot />
</main>

<div class="absolute bottom-4 right-4">
	<Button href="/imprint" color="alternative" size="xs">Impressum</Button>
	<Button href="/privacy" color="alternative" size="xs">Datenschutz</Button>
</div>
