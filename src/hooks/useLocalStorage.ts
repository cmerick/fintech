import { useEffect, useState } from "react";


const useLocalStorage = (key: string, initial: string): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [state, setState] = useState(window.localStorage.getItem(key) ? window.localStorage.getItem(key)!.toString() : initial);

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state, key])

  return [state, setState];
}

export default useLocalStorage;