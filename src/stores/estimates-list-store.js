import { writable } from "svelte/store";

// localStorage.setItem('estimates_list', JSON.stringify([]));
let listStorage = [];
const listLocalStorage = localStorage.getItem('estimates_list');

if (listLocalStorage !== null) {
  listStorage = JSON.parse(listLocalStorage);
}

export const estimatesListStore = writable(listStorage);

estimatesListStore.subscribe((value) => {
  localStorage.setItem('estimates_list', JSON.stringify(value));
})
