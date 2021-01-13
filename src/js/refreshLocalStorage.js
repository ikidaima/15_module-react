export default function(key, value) {
  value = JSON.stringify(value);
  localStorage.setItem(key, value);
}