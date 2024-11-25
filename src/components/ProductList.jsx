import React from 'react'
import { useState } from 'react'

const ProductList = ({currency, productRow, setProductRow, totalDetail}) => {

	const productData = {
		"P001": { weight: 1.2, price: 10 },
		"P002": { weight: 0.5, price: 5 },
		"P003": { weight: 2.0, price: 20 },
		"P004": { weight: 0.8, price: 8 },
	};

	//? use in data list
	const productList = [
		"P001",
		"P002",
		"P003",
		"P004",
	];
	


	const discountCode = {
		"DISCOUNT10": 10,
          "DISCOUNT20": 20,
          "DISCOUNT30": 30,
	}

	const replaceProduct = (index, product) =>{
		let updatedProduct = [...productRow];
		updatedProduct[index] = product;
          setProductRow(updatedProduct);
	}

	const handleProductId = (index, value) =>{
		let updatedProduct = productRow[index];
		updatedProduct["id"] = value;
		
		//? Check product exist
		const product = productData[value];

		if (product) {
			updatedProduct.quantity = 1;
			updatedProduct.price = product.price;
			updatedProduct.weight = product.weight;
			updatedProduct.total = updatedProduct.quantity * updatedProduct.price * (1 - (updatedProduct.discountCode / 100));
		}
		else{
			updatedProduct.price = "";
			updatedProduct.weight = "";
			updatedProduct.total = "";
			updatedProduct.quantity = "";
		}
		replaceProduct(index, updatedProduct);
	}

	const handleProductDiscount = (index, value) =>{
		let updatedProduct = productRow[index];
		updatedProduct["discountCode"] = value;
		// discount Valid
		const discount = discountCode[value];
		
		if (discount) {
			updatedProduct.discount = discount;
			updatedProduct.total = (updatedProduct.quantity * updatedProduct.price) * (1 - (updatedProduct.discount / 100));
		}
		replaceProduct(index, updatedProduct);
	}

	const handleProductQuantity = (index, value) =>{
          let updatedProduct = productRow[index];
          updatedProduct["quantity"] = value;
          updatedProduct.total = updatedProduct.quantity * updatedProduct.price * (1 - (updatedProduct.discount / 100));
		replaceProduct(index, updatedProduct);
     }

	const addrow = () =>{
		let newRow = [...productRow];
          newRow.push({ id: "", quantity: "", weight: "", price: "", discountCode: "", total:""});
          setProductRow(newRow);
	}

	const deleterow = (index) =>{
		let newRow = [...productRow];
          newRow.splice(index, 1);
		setProductRow(newRow);
	}

	return (
		<section className="w-full py-5 px-10 bg-gray-100 border-2 h-full">
			<div className="text-header">
				Product List
			</div>
			{/* Product List */}
			<div className="w-auto bg-white h-[300px] max-h-[300px] overflow-y-scroll mx-10 mb-5">
				<table className="w-full table-auto">
					<thead className="sticky">
						<tr className="bg-gray-200">
							<th className="table-header">#</th>
							<th className="table-header">Id</th>
							<th className="table-header">Quantity</th>
							<th className="table-header border-x-2 border-gray-300">Weight</th>
							<th className="table-header">Price/unit</th>
							<th className="table-header">Unit</th>
							<th className="table-header">Prices <br /> w/o Discount</th>
							<th className="table-header border-x-2 border-gray-300">Discount Code</th>
							<th className="table-header">Total</th>
						</tr>
					</thead>
					<tbody>
						{productRow.map((product, index) => (
							<tr key={index} className="w-full">
								<td className="table-body text-center">{index + 1}</td>
                                        <td className="table-body w-32">
                                             <input 
										list="ProductId" 
                                                  value={product.id} 
                                                  onChange={(e) => handleProductId(index, e.target.value)} 
										placeholder=""
                                                  className="table-body-input" 
                                             />
									<datalist id="ProductId">
										{productList.map((option, index) => (
											<option key={index} value={option} />
										))}
									</datalist>
                                        </td>
								<td className="table-body w-16">
									<input 
                                                  type="number" 
                                                  value={product.quantity} 
                                                  onChange={(e) => handleProductQuantity(index, e.target.value)} 
                                                  placeholder=""
                                                  className="table-body-input" 
                                             />
								</td>
								<td className="table-body border-x border-gray-300">
									<p className="table-body-text">
										{product.weight}
									</p>
								</td>
              						<td className="table-body">
								    	<p className="table-body-text">
										{product.price}
									</p>
								</td>
								<td className="table-body">
									<p className="table-body-text">
										THB
									</p>
								</td>
								<td className="table-body">
									<p className="table-body-text">
										{product.price * product.quantity !== 0 ? product.price * product.quantity : ""}
									</p>
								</td>
								<td className="table-body w-32 border-x-2 border-gray-300">
									<input 
                                                  type="text" 
                                                  value={product.discountCode} 
                                                  onChange={(e) => handleProductDiscount(index, e.target.value)} 
                                                  placeholder=""
                                                  className="table-body-input" 
                                             />
								</td>
								<td className="table-body">
									<p className="table-body-text">
										{product.total}
									</p>
                                        </td>
								<td className="table-body w-10 text-sm">
									<button onClick={() => deleterow(index)} className="text-blue-600">Delete <br/> Row</button>
                                		</td>
							</tr>
						))}
						<tr className="border-t-2 border-gray-300">
							<th>
								
							</th>
							<td>

							</td>
							<th className="table-body-summary">
								{totalDetail.quantity}
							</th>
							<th className="table-body-summary border-x-2 border-gray-300">
								{totalDetail.weight}
							</th>
							<td></td>
							<td></td>
							<td></td>
							<td className="border-x-2 border-gray-300"></td>
							<th className="table-body-summary">
								{totalDetail.price}
							</th>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="flex justify-start mb-5">
				<button onClick={addrow} className="border-2 px-2 py-1 bg-gray-200 rounded-lg text-black">Add Row</button>
			</div>

			<textarea 
				type="text"
				placeholder='Remark'
				className="border-2 w-full rounded-lg h-32 p-2 resize-none"
			/>

		</section>
	)
}

export default ProductList