export type Coffee = {
  id?: number

  flavour: string

  age: string

  color: string
}

export type Fruit = {
  id?: number

  amount: string

  color: string
}

export type User = {
  id?: number

  username: string

  passwordHash: string
}

export type CoffeeError = any

export type FruitError = any

export type UserError = any

export type LoginValues = {
  username: string
  password: string
}

export type RegisterValues = {
  username: string
  email: string
  password: string
  passwordConfirm: string
}
