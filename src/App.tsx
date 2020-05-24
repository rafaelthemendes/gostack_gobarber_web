import React from 'react';
import SignIn from './pages/SignIn';
import GlobalStyles from './styles/global';
import { AuthContextProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContextProvider>
      <SignIn />
    </AuthContextProvider>
    <GlobalStyles />
  </>
);

export default App;
