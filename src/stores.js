import { writable, derived } from 'svelte/store';
import { userData } from './routes/data';

export const usersNames = writable([{ value: 'Krishna Kiran', label: 'krishna kiran' },
{ value: 'Elon Musk', label: 'Elon Musk' }
]);

export const userName = writable('Krishna Kiran');
console.log("NAME UPDATED", userName.subscribe((info) => info));

export const userInfo = derived(userName, function () {
	// @ts-ignore
	/**
	 * @type {string}
	 */
	let usr;
	userName.subscribe((name) => (usr = name));
	const user = userData.filter((user) => user.name === usr);
	console.log("USR ARRAY", user);
	return user;
});
