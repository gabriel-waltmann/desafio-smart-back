export interface ProductEntity {
  id: number,
  name: string,
  price: number,
  category: string,
  estoque: number,
  discount: number,
  
  // timestamps!
  createdAt?: Date,
  deletedAt?: Date,
  updatedAt?: Date,
}