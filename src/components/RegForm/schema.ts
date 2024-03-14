import * as yup from 'yup';

const regExpEmail = new RegExp(/^\S+@\S+\.\S+$/);
const regExpPhone = new RegExp(/^\+?[1-9][0-9]{7,14}$/);

export const schema = yup.object().shape({
    username: yup.string().trim().required('Обязательное поле').min(2, 'Необходимо минимум 2 символа'),
    email: yup.string().required('Обязательное поле').matches(regExpEmail, 'Неверный формат почты'),
    phone: yup.string().required('Обязательное поле').matches(regExpPhone, 'Неверный формат номера'),
    password: yup.string().required('Обязательное поле').min(6, 'Необходимо минимум 6 символов'),
});
