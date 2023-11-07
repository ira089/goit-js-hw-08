// export function saveToLS(key, value) {
//   localStorage.setItem(key, JSON.stringify(value));
// }

export function loadFromLS(key) {
  const data = localStorage.getItem(key);
  try {
    // console.log(JSON.parse(data));
    return JSON.parse(data);
  } catch {
    // console.log(data);
    return data;
  }
}
