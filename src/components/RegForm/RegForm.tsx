import styles from './Form.module.scss';
import { useForm, Controller } from 'react-hook-form';
import { RegisterInterface } from './types.ts';
import { schema } from './schema.ts';
import { yupResolver } from '@hookform/resolvers/yup';

const RegForm = () => {
    const {
        control,
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<RegisterInterface>({
        resolver: yupResolver(schema),
    });

    const submitForm = (data: RegisterInterface) => {
        console.log({ data });
        reset();
    };

    console.log(errors);

    return (
        <>
            <form onSubmit={handleSubmit(submitForm)}>
                <h3 className={styles.register}>Регистрация</h3>

                <div className={styles.formWrapper}>
                    <div className={styles.inputWrapper}>
                        <label className='test'>Имя пользователя</label>
                        <input {...register('username')} type='text' placeholder='Ведите имя пользователя' />
                        <p className={styles.error}>{errors.username?.message}</p>
                    </div>

                    <div className={styles.inputWrapper}>
                        <label>Электронная почта</label>
                        <input {...register('email')} type='email' placeholder='Введите email' />
                        <p className={styles.error}>{errors.email?.message}</p>
                    </div>

                    <div className={styles.inputWrapper}>
                        <label>Мобильный телефон</label>
                        <input {...register('phone')} type='tel' placeholder='Введите телефон' />
                        <p className={styles.error}>{errors.phone?.message}</p>
                    </div>

                    <div className={styles.inputWrapper}>
                        <label>Пароль</label>
                        <Controller
                            name='password'
                            control={control}
                            render={({ field }) => <input {...field} type='password' placeholder='Введите пароль' />}
                        />
                        <p className={styles.error}>{errors.password?.message}</p>
                    </div>
                </div>

                <button>Зарегистирироваться</button>
            </form>
        </>
    );
};

export { RegForm };
