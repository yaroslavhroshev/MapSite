import Map from '../components/Map/Map';
import './MainPage.scss';
import Card from '../components/Card/Card';

const MainPage = () => {
  return (
    <section className="content-wrapper">
      <Map />
      <Card />
    </section>
  );
};

export default MainPage;
