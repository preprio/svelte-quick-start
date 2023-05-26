<script>
	export let data;
</script>

<svelte:head>
	<title>{data.article.title}</title>
</svelte:head>

<div>
	<h1>
		{data.article.title}
	</h1>

	{#each data.article.content as content}
		<div>
			{#if content.__typename === 'Assets'}
				<img src="{content.items[0].url}" width="300" height="250"/>
			{:else if content.__typename === 'Text'}
				{@html content.body}
			{/if}
		</div>
	{/each}
</div>
