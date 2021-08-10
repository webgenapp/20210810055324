import React from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { Coffee } from '../types'

type CreateProps = {
  coffee?: Coffee
  onSubmit: (values: Coffee, helpers: FormikHelpers<Coffee>) => void
}

function CoffeeForm({ coffee, onSubmit }: CreateProps) {
  const initialValues: Coffee = {
    flavour: coffee ? coffee.flavour : '',
    age: coffee ? coffee.age : '',
    color: coffee ? coffee.color : '',
  }

  return (
    <Formik
      initialValues={initialValues}
      validate={() => {
        return {}
      }}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type='text' name='flavour' placeholder='Flavour' />

          <Field type='text' name='age' placeholder='Age' />

          <Field type='text' name='color' placeholder='Color' />

          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default CoffeeForm
