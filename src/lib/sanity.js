import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'dcbtahcf', // Replace with your actual Sanity project ID
  dataset: 'production',       // Replace with your dataset (e.g., 'production')
  useCdn: true,                // Use CDN for faster performance
});

export default client;

