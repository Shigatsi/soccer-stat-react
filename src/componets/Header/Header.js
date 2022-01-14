import './Header.css';

import Navigation from '../Navigation/Navigation';
import soccerBall from '../../images/soccer_ball.png';

function Header() {
  return (
    <header className="header">
      <div className='header__logotype-container'>
        <img className='header__logo' alt="logo soccer ball" src = {soccerBall} />
        <h1 className="header__title">Soccer Stats</h1>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
//grey #d8d9d3
//green #8a9992
//black #000