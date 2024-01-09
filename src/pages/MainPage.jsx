import Map from '../components/Map/Map';
import './MainPage.scss';
import Card from '../components/Card/Card';
import CardContainer from '../components/CardContainer/CardContainer';

const MainPage = () => {
  return (
    <section className="content-wrapper">
      <Map />
      <CardContainer />
    </section>
  );
};

export default MainPage;
