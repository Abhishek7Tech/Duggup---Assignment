import { redirect } from '@sveltejs/kit';

export async function load({fetch, params}) {
    const response = await fetch(`http://localhost:4000/userData/${params.slug}`);
    const  response2 = await fetch(`/api/:${params.slug}`);
    const data2 = await response2.json();
    const data = await response.json();
    console.log("DATA", data, "DATA2", data2);
    return {user: data2};
}