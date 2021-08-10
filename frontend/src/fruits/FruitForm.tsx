import React from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { Fruit } from '../types'

type CreateProps = {
  fruit?: Fruit
  onSubmit: (values: Fruit, helpers: FormikHelpers<Fruit>) => void
}

function FruitForm({ fruit, onSubmit }: CreateProps) {
  const initialValues: Fruit = {
    amount: fruit ? fruit.amount : '',
    color: fruit ? fruit.color : '',
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
          <Field type='text' name='amount' placeholder='Amount' />

          <Field type='text' name='color' placeholder='Color' />

          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default FruitForm
