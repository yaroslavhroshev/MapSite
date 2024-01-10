import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Поле "Назва авто" обов\'язкове'),
  mark: Yup.string().required('Поле "Марка авто" обов\'язкове'),
  price: Yup.number()
    .required('Поле "Ціна" обов\'язкове')
    .positive('Ціна повинна бути додатньою чисельною величиною')
    .typeError('Ціна маєбути числом'),
  imageUrl: Yup.string()
    .url('Введіть коректне посилання на фотографію')
    .required('Поле "Посилання на фотографію" обов\'язкове'),
  geocode: Yup.array()
    .of(Yup.number().required('Кожне число в геоданих повинно бути заповнено'))
    .required('Поле "Геодані" обов\'язкове'),
});

export default validationSchema;
