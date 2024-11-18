import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout.jsx';
import Home from './Pages/Home';

export default function App() {
  return (
    <>
      <Router basename="/Movie-Search-App">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
