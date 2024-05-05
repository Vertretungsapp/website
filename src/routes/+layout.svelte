<script>
import { DarkMode } from 'flowbite-svelte';
</script>

<div class="absolute top-4 right-4">
	<DarkMode />
</div>

<main class="bg-background-light dark:bg-background min-h-screen text-text-light dark:text-text">
	<slot />
</main>
