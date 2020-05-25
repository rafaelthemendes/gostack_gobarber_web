import React from 'react';
import AppProvider from './hooks';
import SignIn from './pages/SignIn';
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>
    <GlobalStyles />
  </>
);

export default App;
