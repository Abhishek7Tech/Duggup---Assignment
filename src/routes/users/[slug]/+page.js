import { redirect } from '@sveltejs/kit';

export async function load({fetch, params}) {
    // LOCAL
    // const response = await fetch(`http://localhost:4000/userData/${params.slug}`);
    // const data = await response.json();

    const  response = await fetch(`/api/:${params.slug}`);
    const data = await response.json();
    // console.log("DATA", data, "DATA2", data2);
    return {user: data};
}