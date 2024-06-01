import { Routes, Route } from 'react-router-dom';
import NoMatch from './NoMath';
import Home from './Home';
import Board from '../pages/Board';
import Card from './Card';
import Layout from './Layout';
import LandingPage from './LandingPaage';

export default function RoutesSetup() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        {/* <Route path="/welcome" element={<Home title="Welcome to our site" />} /> */}
        <Route path="/board" element={<Board />} />
        {/* <Route path="/board/card/:cardid" element={<Card />} /> */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}
