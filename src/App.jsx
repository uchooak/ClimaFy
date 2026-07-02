import { Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout.jsx';
import Home from './pages/HomeFigma.jsx';

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AppLayout>
  );
}
