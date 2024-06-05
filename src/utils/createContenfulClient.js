import * as contentful from 'contentful';

export const contenfulCLient = contentful.createClient({
space: import.meta.env.VITE_SPACE_ID,
accessToken: import.meta.env.VITE_ACCESS_TOKEN
});