function Footer() {
  return (
    <footer className="footer">
      <h2 className="header__title">Тестовое задание для SimbirSoft</h2>
      <p className="footer__copyright">&#169; Евгения Зубкова, 2021</p>
          <ul className="footer__nav">
            <li className="foter__list-item">
              <a href='https://www.simbirsoft.com/' className="footer__link" className="footer__link">SimbirSoft</a>
            </li>
            <li className="foter__list-item">
              <a href='https://github.com/Shigatsi' className="footer__link" className="footer__link">Github</a>
            </li>
          </ul>
    </footer>
  );
}

export default Footer;
