<script>
	export let data;
</script>

<svelte:head>
	<title>{data.post.title}</title>
</svelte:head>

<div>
	<h1>
		{data.post.title}
	</h1>

	<div class="my-10">
		<img src={data.post.cover.url}/>
	</div>

	{#each data.post.content as content}
		<div>
			{#if content.__typename === 'Assets'}
				<img src={content.items[0].url} />
			{:else if content.__typename === 'Text'}
				{@html content.body}
			{/if}
		</div>
	{/each}
</div>
