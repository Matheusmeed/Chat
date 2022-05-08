import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { Home, Room } from '../pages';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' element={<Home />} />
        <Route path='/room' element={<Room />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
