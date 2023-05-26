<script>
	export let data;
</script>

<svelte:head>
	<title>My blog site</title>
</svelte:head>

<section>
	<h1>
		My blog site
	</h1>

	<ul>
		{#each data.articles as article}
			<li>
				<a href="{article._slug}">{article.title}</a>
			</li>
		{/each}
	</ul>
</section>