import React from 'react';
import { Data2 } from './Data2';

export const ProductList2 = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
	const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}

		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
	};

	return (
		<div className='container-items'>
			{Data2.map(product => (
				<div className='item' key={product.id}>
					<figure>
						<img src={product.images} alt={product.nameProduct} 
						/>
					</figure>
					<div className='info-product'>
						<h2>{product.nameProduct}</h2>
						<p className='price'>L{product.price}</p>
						<button onClick={() => onAddProduct(product)}>
							Añadir Al Carrito
						</button>
					</div>
				</div>
			))}
		</div>
	);
};