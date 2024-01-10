import Map from '../components/Map/Map';
import './MainPage.scss';
import CardContainer from '../components/CardContainer/CardContainer';
import NewCarForm from '../forms/NewCarForm/NewCarForm';

const MainPage = () => {
  return (
    <section className="content-wrapper">
      <NewCarForm />
      <Map />
      <CardContainer />
    </section>
  );
};

export default MainPage;
