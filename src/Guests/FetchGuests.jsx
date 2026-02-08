const API = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const cohort = "/2601-Pedro";
const guestsAPI = API + cohort + "/guests";

/* Removed because don't need to store data in a state only return it */
// const state = {
//   allGuests: [],
// };

export async function FetchGuests() {
  try {
    const response = await fetch(guestsAPI);
    const array = await response.json();
    return array.data;
    // state.allGuests = await array.data;
  } catch (err) {
    console.error(`Something error Something`, err);
    return [];
  }
}

export async function FetchGuest(id) {
  try {
    const response = await fetch(guestsAPI + "/" + id);
    const array = await response.json();
    return array.data;
  } catch (err) {
    console.error(`Something error Something`, err);
    return null;
  }
}
