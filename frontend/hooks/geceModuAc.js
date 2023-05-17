// import { useState } from "react";

// export const useNightMode = (initialValue) => {
//   const [value, setValue] = useState(initialValue);
//
//   return [value, setValue];
// };

import { useLocalStorage } from "./localStorageKullan";

export const useNightMode = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue);
  return [value, setValue];
};
