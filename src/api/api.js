const databaseUrl = "https://hacker-news.firebaseio.com/v0";

// const api = Firebase.database().ref("/v0");
export function fetchListData(type) {
  let res = fetchIdsByType(type)
    .then((response) => response.json())
    .then((ids) => fetchItems(ids));
  console.log("==fetchListData==", res);
  return res;
}

export function fetchIdsByType(type) {
  return fetch(`${databaseUrl}/${type}stories.json`);
  // .then((data) => console.log(data));
}

export function fetchItem(id) {
  return fetch(`${databaseUrl}/item/${id}.json`).then((response) =>
    response.json()
  );
}

export function fetchItems(ids) {
  // console.log("ids", ids);
  return Promise.all(ids.map((id) => fetchItem(id)));
}
