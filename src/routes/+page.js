export async function load({fetch, params}) {

    // const response = await fetch("http://localhost:4000/userData/1");
    
    // const data = await response.json();

    const  response = await fetch(`/api/:1`);
    const data = await response.json();
    
    return {user: data};
}