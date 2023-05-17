// import { useState } from "react";

// export const useNightMode = (initialValue) => {
//   const [value, setValue] = useState(initialValue);
//   const handleChanges = (updatedValue) => {
//     setValue(updatedValue);
//   };
//   return [value, setValue, handleChanges];
// };

import { useLocalStorage } from "./localStorageKullan";

export const useNightMode = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue);
  const handleChanges = (updatedValue) => {
    setValue(updatedValue);
  };
  return [value, setValue, handleChanges];
};
