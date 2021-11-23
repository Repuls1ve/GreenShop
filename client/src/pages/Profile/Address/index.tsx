import {FC, useEffect} from 'react'
import {Formik, Form, FormikHelpers} from 'formik'

import {useAppSelector, useAppDispatch} from '../../../hooks/redux'
import {edit, resetEditState} from '../../../store/slices/user-slice'

import {IUser} from '../../../models/IUser'

import TextField from '../../../components/TextField'
import Button from '../../../components/Button'

import styles from './styles.module.css'

interface AddressFormValues {
    firstName: IUser['firstName']
    lastName: IUser['lastName']
    country: IUser['address']['country']
    city: IUser['address']['city']
    street: IUser['address']['street']
    state: IUser['address']['state']
    zip: IUser['address']['zip']
    email: IUser['email']
    phone: IUser['phone']
}

const ProfileAddress: FC = () => {
    const dispatch = useAppDispatch()
    const {...user} = useAppSelector(state => state.user.user!)
    const {isEditLoading, isEditSuccess, editError} = useAppSelector(state => state.user)

    useEffect(() => {
        dispatch(resetEditState())
    }, [dispatch])

    const initialValues: AddressFormValues = {
        firstName: user.firstName,
        lastName: user.lastName,
        country: user.address.country,
        city: user.address.city,
        street: user.address.street,
        state: user.address.state,
        zip: user.address.zip,
        email: user.email,
        phone: user.phone
    }

    const onSave = (values: AddressFormValues, actions: FormikHelpers<AddressFormValues>) => {
        dispatch(edit({
            firstName: values.firstName,
            lastName: values.lastName,
            phone: values.phone,
            address: {
                country: values.country,
                city: values.city,
                street: values.street,
                state: values.state,
                zip: values.zip
            }
        }))
    }

    return (
        <main className={styles.container}>
            <Formik
            initialValues={initialValues}
            onSubmit={onSave}
            >
                {({handleChange, values, errors}) => (
                    <Form className={styles.form}>
                        <h3 className={styles.title}>Billing address</h3>
                        <h4 className={styles.subtitle}>The following addresses will be used on the checkout page by default</h4>
                        <div className={styles.row}>
                            <div className={styles.input}>
                                <TextField
                                label='First Name'
                                onChange={handleChange('firstName')}
                                value={values.firstName}
                                />
                                <h3 className={styles.inputError}>{errors.firstName}</h3>
                            </div>
                            <div className={styles.input}>
                                <TextField
                                label='Last Name'
                                onChange={handleChange('lastName')}
                                value={values.lastName}                                
                                />
                                <h3 className={styles.inputError}>{errors.lastName}</h3>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.input}>
                                <TextField
                                label='Country / Region'
                                onChange={handleChange('country')}
                                value={values.country}
                                />
                                <h3 className={styles.inputError}>{errors.country}</h3>
                            </div>
                            <div className={styles.input}>
                                <TextField
                                label='Town / City'
                                onChange={handleChange('city')}
                                value={values.city}
                                />
                                <h3 className={styles.inputError}>{errors.city}</h3>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.input}>
                                <TextField
                                    label='Street Address'
                                    placeholder='House number and street name'
                                    onChange={handleChange('street')}
                                    value={values.street}
                                />
                                <h3 className={styles.inputError}>{errors.street}</h3>
                            </div>
                            <div className={styles.input}>
                                <TextField
                                    label='State'
                                    placeholder='Select a state'
                                    onChange={handleChange('state')}
                                    value={values.state}
                                />
                                <h3 className={styles.inputError}>{errors.state}</h3>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.input}>
                                <TextField
                                    label='Zip'
                                    onChange={handleChange('zip')}
                                    value={values.zip}
                                />
                                <h3 className={styles.inputError}>{errors.zip}</h3>
                            </div>
                            <div className={styles.input}>
                                <TextField
                                    label='Email address'
                                    shellActive={styles.shellReadOnly}
                                    value={values.email}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.input}>
                                <TextField
                                    label='Phone Number'
                                    onChange={handleChange('phone')}
                                    value={values.phone}
                                />
                                <h3 className={styles.inputError}>{errors.phone}</h3>
                            </div>
                        </div>
                        <div className={styles.buttonRow}>
                            <Button type='submit' className={styles.save}>Save Address</Button>
                            <h3 className={isEditSuccess ? styles.serverSuccess : styles.serverError}>
                                {isEditLoading ?
                                <span className={styles.serverLoading}>Loading...</span>
                                :
                                isEditSuccess ?
                                'Address information updated'
                                : editError
                                }
                            </h3>
                        </div>
                    </Form>
                )}
            </Formik>
        </main>
    )
}

export default ProfileAddress
