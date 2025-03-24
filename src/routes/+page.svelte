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
		{#each data.posts as post}
			<li>
				<a href="{post._slug}">{post.title}</a>
			</li>
		{/each}
	</ul>
</section>