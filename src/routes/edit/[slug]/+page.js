import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  return {livre: params.slug};
  
  throw error(404, 'Not found');
}