import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useUserID = () => {
  const [userID, setUserID] = useState<string | null>(
    localStorage.getItem('id')
  );

  useEffect(() => {
    if (!userID) {
      const id = uuidv4();
      setUserID(id);
      localStorage.setItem('id', id);
    }
  }, []);

  return userID;
};
