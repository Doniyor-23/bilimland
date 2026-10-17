export const load = () => { try { return JSON.parse(localStorage.getItem("bl")); } catch (e) { return null; } };
export const save = (s) => { try { localStorage.setItem("bl", JSON.stringify(s)); } catch (e) {} };
export const clear = () => { try { localStorage.removeItem("bl"); } catch (e) {} };
