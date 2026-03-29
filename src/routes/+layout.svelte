<script>
	import '$lib/main.css';
	import '$lib/main.rue';
	let { children } = $props();

</script>

<svelte:head>
	<!-- <link rel="icon" href={favicon} /> -->
	<title>Aaron's App</title>
	<script src="https://kit.fontawesome.com/5cf062dc93.js" crossorigin="anonymous"></script>
</svelte:head>

<div class="page">
	{@render children()}
</div>

<style>

</style>