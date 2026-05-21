# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
pnpm dlx sv@0.15.3 create --template minimal --no-types --install pnpm prepr-svelte
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

<<<<<<< Updated upstream
```bash
npm run preview
```

Check out the [deployment documentation](https://kit.svelte.dev/docs/building-your-app) for more information.

## The end result

![blog site end result](https://assets-site.prepr.io/74bgrcumcy41//svelte-blog-posts.png)
=======
> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
>>>>>>> Stashed changes
