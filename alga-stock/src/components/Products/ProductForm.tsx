import React, { useState } from 'react'

import Form from '../Shared/Form'
import Input from '../Shared/Input'
import Button from '../Shared/Button'

const initialFormState = {
  name: '',
  price: '',
  stock: ''
}

const ProductForm = () => {
  const [form, setForm] = useState(initialFormState)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target

    setForm({
      ...form,
      [name]: value
    })
  }

  return <Form title='Product' onSubmit={() => console.log(form)}>
    <Input
      onChange={handleInputChange}
      name="name"
      label="Name"
      placeholder="E.g.: Cookie"
      required
    />
    <Input
      onChange={handleInputChange}
      name="price"
      label="Price"
      type="number"
      step="0.01"
      min="0"
      placeholder="E.g.: 1.25"
      required
    />
    <Input
      onChange={handleInputChange}
      name="stock"
      label="Stock"
      type="number"
      min="0"
      placeholder="E.g.: 15"
      required
    />
    <Button>
      Submit
    </Button>
  </Form>
}

export default ProductForm