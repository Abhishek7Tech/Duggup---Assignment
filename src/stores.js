import { writable } from 'svelte/store';


export const usersNames = writable([{ value: 'Krishna Kiran', label: 'krishna', id: 1 },
{ value: 'Elon Musk', label: 'elon', id:2 }
]);

// export const userName = writable('Krishna Kiran');
