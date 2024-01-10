import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import {
  addNewMarker,
  onNewGeocodeIsActive,
  offNewGeocodeIsActive,
  deleteNewGeocode,
} from '../../redux/slices/markersSlice';
import validationSchema from './validationSchema';
import './NewCarForm.scss';

const CarForm = () => {
  const dispatch = useDispatch();
  const newGeocodeIsActive = useSelector(
    (state) => state?.markers?.newGeocodeIsActive,
  );
  const newGeocode = useSelector((state) => state?.markers?.newGeocode);

  const onSubmit = (values, actions) => {
    dispatch(addNewMarker(values));
    dispatch(deleteNewGeocode());
    dispatch(offNewGeocodeIsActive());
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      mark: '',
      price: '',
      imageUrl: '',
      geocode: [],
    },
    validationSchema,
    onSubmit,
  });

  useEffect(() => {
    if (newGeocode.length > 0) {
      formik.setFieldValue('geocode[0]', newGeocode[0]);
      formik.setFieldValue('geocode[1]', newGeocode[1]);
    }
  }, [newGeocode]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <legend>Додати оголошення</legend>
      <div>
        <label htmlFor="name">
          Назва авто
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
        </label>
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="mark">
          Марка авто
          <input
            id="mark"
            name="mark"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mark}
          />
        </label>
        {formik.touched.mark && formik.errors.mark ? (
          <div>{formik.errors.mark}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="price">
          Ціна
          <input
            id="price"
            name="price"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
          />
        </label>
        {formik.touched.price && formik.errors.price ? (
          <div>{formik.errors.price}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="imageUrl">
          Посилання на фотографію
          <input
            id="imageUrl"
            name="imageUrl"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.imageUrl}
          />
        </label>
        {formik.touched.imageUrl && formik.errors.imageUrl ? (
          <div>{formik.errors.imageUrl}</div>
        ) : null}
      </div>

      <div>
        <p>Натисніть на кнопку нижче, після чого натисніть на карту</p>
        <button
          onClick={() => {
            dispatch(onNewGeocodeIsActive());
          }}
          type="button"
          className="active-btn"
        >
          Зроби клік
        </button>
        {newGeocodeIsActive ? (
          <label htmlFor="geocode">
            Геодані
            <div>
              <input
                id="geocode[0]"
                name="geocode[0]"
                type="number"
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                onBlur={formik.handleBlur}
                value={
                  formik.values.geocode[0] !== undefined
                    ? formik.values.geocode[0]
                    : ''
                }
              />
              <input
                className="input--margin"
                id="geocode[1]"
                name="geocode[1]"
                type="number"
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                onBlur={formik.handleBlur}
                value={
                  formik.values.geocode[1] !== undefined
                    ? formik.values.geocode[1]
                    : ''
                }
              />
            </div>
            <div>
              {formik.touched.geocode && formik.errors.geocode && (
                <div>{formik.errors.geocode[0]}</div>
              )}
            </div>
            <div>
              {formik.touched.geocode && formik.errors.geocode && (
                <div>{formik.errors.geocode[1]}</div>
              )}
            </div>
          </label>
        ) : null}
      </div>

      <div>
        <button type="submit" disabled={!newGeocodeIsActive}>
          Відправити
        </button>
      </div>
    </form>
  );
};

export default CarForm;
