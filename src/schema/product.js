import * as Yup from 'yup';

const productSchema = Yup.object()
  .shape({
    title: Yup.string().min(2, 'Product Title too short.').max(25, 'Product Title too long').required('Title is required'),
    price: Yup.number().required('Price is required.').max(100000, 'Price is to big.').typeError('Price is required'),
    description: Yup.string().min(6, 'Descrition is too short.').max(150, 'Description is too long.').required('Description required.'),
    categoryId: Yup.number().max(1, 'Category invalid.').required('Category is required.'),
    images: Yup.array().of(Yup.string().required()).nullable(),
  })
  .required();

export { productSchema };
