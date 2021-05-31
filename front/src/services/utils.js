const HOME_API = "/api/homes";
const ROOM_API = "/api/rooms";

const getHomes = async () => {
  return fetch(HOME_API).then(getJSON);
};

const getRooms = async() => {
  return fetch(ROOM_API).then(getJSON);
}

const getHomeById = async (id) => {
  return fetch(`${HOME_API}/${id}`).then(getJSON);
};

const getRoomsById = async (id) => {
  return fetch(`${ROOM_API}/${id}`)
}

const getJSON = (response) => response.json();

export { getHomes, getHomeById , getRooms, getRoomsById};
