# Svelte Quick Start
The Svelte quick start project launches a blog app with content from Prepr.

Check out the [Stackblitz demo](https://stackblitz.com/edit/svelte-quick-start) for zero installation.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Add the environment file
Copy the .env.example file in this directory to .env (which will be ignored by Git) by running the following command:

```bash
cp .env.example .env
```

## Update the environment file
In the .env file replace `<YOUR-ACCESS-TOKEN>` with the Prepr access token from your environment with demo content.

## Development Server

Start the development server.

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

You can preview the production build with:

```bash
npm run preview
```

Check out the [deployment documentation](https://kit.svelte.dev/docs/building-your-app) for more information.

## The end result

![blog site end result](https://assets-site.prepr.io//5oz8w28ybxje-screenshot-2023-05-10-at-111353.png)
