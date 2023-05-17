import { createContext, useEffect, useState } from 'react';
import Router from './components/Router';

export const UserContext = createContext();

function App() {
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    localStorage.setItem('isUser', JSON.stringify(isUser));
  }, [isUser]);
  return (
    <UserContext.Provider value={{ isUser, setIsUser }}>
      <Router />
    </UserContext.Provider>
  );
}

export default App;
