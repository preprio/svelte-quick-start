import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	// Falls back to the Prepr demo environment when PREPR_ENDPOINT is not set.
	PREPR_ENDPOINT: {
		schema: (input) => input || 'https://graphql.prepr.io/ac_e54beab08406dd41fcdead2bef10364f442559f67fe86ebb0ac7aa6e3a1a4605'
	}
});
