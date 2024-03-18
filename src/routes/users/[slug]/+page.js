import { redirect } from '@sveltejs/kit';

export async function load({fetch, params}) {
    const response = await fetch(`http://localhost:4000/userData/${params.slug}`);
    const data = await response.json();
    console.log("DATA", data);
    return {user: data};
}