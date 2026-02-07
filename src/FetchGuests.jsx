const API = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const cohort = "/2601-Pedro";
const guestsAPI = API + cohort + "/guests";

const state = {
  allGuests: [],
};

export default async function getGuests() {
  try {
    const response = await fetch(guestsAPI);
    const array = await response.json();
    state.allGuests = await array.data;
  } catch (err) {
    console.error(`Something error Something`, err);
  }
}
