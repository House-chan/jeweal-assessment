import logo from './logo.svg';
import ReceiptDetail from './components/ReceiptDetail';
import ProductList from './components/ProductList';
import SummaryDetail from './components/SummaryDetail';
import { useState } from 'react';
function App() {

	const [productRow, setProductRow] = useState([
		{ id: "", quantity: "", weight: "", price: "", discountCode: "", discount: 0, total:""},
		{ id: "", quantity: "", weight: "", price: "", discountCode: "", discount: 0, total:""},
		{ id: "", quantity: "", weight: "", price: "", discountCode: "", discount: 0, total:""},
		{ id: "", quantity: "", weight: "", price: "", discountCode: "", discount: 0, total:""},
	])

	const totalPrice = productRow.reduce((acc, product) => acc + (parseFloat(product.total) || 0), 0);
	const totalPriceBeforeDiscount = productRow.reduce(
	(acc, product) => acc + ((parseFloat(product.price) || 0) * (parseFloat(product.quantity) || 0)),
	0
	);
	const totalDiscount = totalPriceBeforeDiscount - totalPrice
	const totalDetail = {
		quantity: productRow.reduce((acc, product) => acc + (parseFloat(product.weight) || 0), 0),
		weight:productRow.reduce((acc, product) => acc + (parseFloat(product.weight) || 0), 0),
		price: totalPrice,
          priceWoDiscount: totalPriceBeforeDiscount,
          totalDiscount: totalDiscount
	}

	return (
		<div className="mx-5 mt-5">
			<ReceiptDetail/>
			<div className="w-full flex">
				<div className="w-[60vw]">
					<ProductList 
						productRow={productRow}
						setProductRow={setProductRow}
						totalDetail={totalDetail}
					/>
				</div>
				<div className="w-[40vw]">
					<SummaryDetail/>
				</div>
			</div>
		</div>
	);
}

export default App;
