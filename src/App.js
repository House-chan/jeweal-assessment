import logo from './logo.svg';
import ReceiptDetail from './components/ReceiptDetail';
import ProductList from './components/ProductList';
import SummaryDetail from './components/SummaryDetail';
import ConfirmSection from './components/ConfirmSection';
import { useState } from 'react';
function App() {

	const [userDetail, setUserDetail] = useState(
          {
               docId: "",
               date: "",
               dueDate: "",
               name: "",
               receiptAddress: "",
               deliveryAddress: "",
               refId: "",
               currency: ""
          }
     );

	const [productRow, setProductRow] = useState([
		{ id: "", quantity: "", weight: "", price: "", discountCode: "", discount: 0, total:""},
		{ id: "", quantity: "", weight: "", price: "", discountCode: "", discount: 0, total:""},
		{ id: "", quantity: "", weight: "", price: "", discountCode: "", discount: 0, total:""},
		{ id: "", quantity: "", weight: "", price: "", discountCode: "", discount: 0, total:""},
	])

	const totalPrice = productRow.reduce((acc, product) => acc + (parseFloat(product.total) || 0), 0);
	const totalPriceBeforeDiscount = productRow.reduce((acc, product) => acc + ((parseFloat(product.price) || 0) * (parseFloat(product.quantity) || 0)), 0);
	const totalDiscount = totalPriceBeforeDiscount - totalPrice
	const totalDetail = {
		quantity: productRow.reduce((acc, product) => acc + (parseFloat(product.quantity) || 0), 0),
		weight:productRow.reduce((acc, product) => acc + (parseFloat(product.weight) || 0), 0),
		price: totalPrice,
          priceWoDiscount: totalPriceBeforeDiscount,
          discount: totalDiscount
	}

	const handleSaving = () => {
		// Save the data to the server
          console.log("Saving Data...");
          // Redirect to the success page
          console.log(productRow)
	};

	const handleCancel = () => {
		setProductRow([
			{ id: "", quantity: "", weight: "", price: "", discountCode: "", discount: 0, total:""},
			{ id: "", quantity: "", weight: "", price: "", discountCode: "", discount: 0, total:""},
			{ id: "", quantity: "", weight: "", price: "", discountCode: "", discount: 0, total:""},
			{ id: "", quantity: "", weight: "", price: "", discountCode: "", discount: 0, total:""},
		])
	};

	const currentCurrency = userDetail.currency ? userDetail.currency :"THB"
	return (
		<div className="w-full">
			<div className="mx-5 mt-5">
				<ReceiptDetail
					userDetail={userDetail}
					setUserDetail={setUserDetail}
				/>
				<div className="w-full flex max-h-[65vh]">
					<div className="w-[60vw]">
						<ProductList 
							productRow={productRow}
							setProductRow={setProductRow}
							totalDetail={totalDetail}
							currency={currentCurrency}
						/>
					</div>
					<div className="w-[40vw]">
						<SummaryDetail
							totalDetail={totalDetail}
							currency={currentCurrency}
						/>
					</div>
				</div>
			</div>
			<ConfirmSection 
				handleSaving={handleSaving}
				handleCancel={handleCancel}
			/>
		</div>
	);
}

export default App;
