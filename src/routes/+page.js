export async function load({fetch}) {

    const response = await fetch("http://localhost:4000/userData/1");
    
    const data = await response.json();
    
    return {user: data};
}