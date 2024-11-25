import React from 'react'

const SummaryDetail = ({totalDetail, currency}) => {
     const vat = totalDetail.price * 0.07;
  return (
     <div className="py-5 px-10 w-full border-2 h-full">
          <div className="text-header">
               Total
          </div>
          <div className="mx-10">
               {/* Subtotal */}
               <div className="summary-list">
                    <div className="summary-text">
                         Subtotal
                    </div>
                    <div className="flex">
                         <p className="summary-price">
                              {totalDetail.priceWoDiscount.toFixed(2)} 
                         </p>
                         <p>
                              {currency}
                         </p>
                    </div>
               </div>
               {/* Discount */}
               <div className="summary-list">
                    <div className="summary-text">
                         Discount
                    </div>
                    <div className="flex">
                         <p className="summary-price">
                              {totalDetail.discount.toFixed(2)} 
                         </p>
                         <p>
                              {currency}
                         </p>
                    </div>
               </div>
               {/* Total After discounts */}
               <div className="summary-list">
                    <div className="summary-text">
                         Total After Discounts
                    </div>
                    <div className="flex">
                         <p className="summary-price">
                              {totalDetail.price.toFixed(2)} 
                         </p>
                         <p>
                              {currency}
                         </p>
                    </div>
               </div>
               {/* Vat */}
               <div className="summary-list mb-10">
                    <div className="summary-text">
                         VAT
                    </div>
                    <div className="flex">
                         <p className="summary-price">
                              {vat.toFixed(2)}
                         </p>
                         <p>
                              {currency}
                         </p>
                    </div>
               </div>
               {/* Grand Total */}
               <div className="summary-list mb-20 p-8 bg-gray-200">
                    <div className="text-3xl font-bold">
                         Grand Total
                    </div>
                    <div className="text-3xl font-bold">
                         {(totalDetail.price + vat).toFixed(2)} {currency}
                    </div>
               </div>
               {/* Note */}
               <div className='mt-32'>
                    <textarea
                         type="text"
                         placeholder='Note'
                         className="w-full border-2 h-24 p-2 rounded-lg resize-none"
                    />
               </div>
          </div>
     </div>
  )
}

export default SummaryDetail