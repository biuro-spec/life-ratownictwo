// Klient Web App Apps Script (backend life-rmip)
// Dane żyją w Arkuszu Google właściciela; ten moduł tylko woła endpointy.

// URL wdrożenia (…/exec). Można nadpisać w localStorage kluczem 'life_gas_url'
// albo zmienną środowiskową VITE_GAS_URL.
// Wdrożenie „ciągłe" (podbijane clasp deploy -i przy każdej zmianie backendu)
const DEFAULT_GAS_URL =
  'https://script.google.com/macros/s/AKfycbz5rRez4AcwPY8oqn7LRF4lpNT20NCJP6yRGg_ipMwq93ihr_DBwF9wlA_CPpY9TgWqvw/exec';

const TOKEN_KEY = 'life_transport_token';
const USER_KEY = 'life_transport_user';

export function gasUrl() {
  return (typeof localStorage !== 'undefined' && localStorage.getItem('life_gas_url'))
    || import.meta.env.VITE_GAS_URL
    || DEFAULT_GAS_URL;
}

export function getToken() {
  return (typeof localStorage !== 'undefined' && localStorage.getItem(TOKEN_KEY)) || '';
}
export function getUser() {
  try { return JSON.parse(localStorage.getItem(USER_KEY) || 'null'); } catch { return null; }
}
export function setSession(token, user) {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user || null));
}
export function clearSession() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}
export function isLoggedIn() {
  return !!getToken();
}

function unwrap(json) {
  if (json && json.success === false) {
    throw new Error(json.message || 'Błąd serwera');
  }
  return json ? json.data : null;
}

// GET: parametry w query stringu
export async function apiGet(action, params = {}) {
  const url = new URL(gasUrl());
  url.searchParams.set('action', action);
  const token = getToken();
  if (token) url.searchParams.set('token', token);
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== '') url.searchParams.set(k, v);
  });
  const res = await fetch(url.toString(), { method: 'GET', redirect: 'follow' });
  return unwrap(await res.json());
}

// POST: text/plain, aby uniknąć CORS preflight (Apps Script nie obsługuje OPTIONS)
export async function apiPost(action, body = {}) {
  const payload = { action, token: getToken(), ...body };
  const res = await fetch(gasUrl(), {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload),
    redirect: 'follow',
  });
  return unwrap(await res.json());
}

// --- Logowanie ---
export async function loginAdmin(login, pin) {
  const data = await apiPost('loginAdmin', { login, pin });
  if (!data?.token) throw new Error('Brak tokena w odpowiedzi');
  setSession(data.token, { name: data.name, login: data.login });
  return data;
}
