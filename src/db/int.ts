import ProductModel from './models/ProductModel';

const isDev = process.env.NODE_ENV === 'development'

const dbInit = async () => {
  try {    
    await ProductModel.sync({ alter: isDev });
  } catch (error) {
    console.error(error);
  }
}

export default dbInit 
