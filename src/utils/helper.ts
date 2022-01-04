export function getLocal(val = '') {
  return JSON.parse(localStorage.getItem(val) || '');
}

export function setLocal(val = '', data = {}) {
  localStorage.setItem(val, JSON.stringify(data));
}

export function deleteLocal(val = undefined) {
  if (val) {
    localStorage.removeItem(val);
  } else {
    localStorage.clear();
  }
}
