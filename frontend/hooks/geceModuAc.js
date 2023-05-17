import { useState } from "react";
import { useLocalStorage } from "./localStorageKullan";

export const useNightMode = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue);
  const handleChanges = (updatedValue) => {
    setValue(updatedValue);
  };
  return [value, setValue, handleChanges];
};
