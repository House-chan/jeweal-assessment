import React from 'react'
import { useState } from 'react'

const ReceiptDetail = () => {
     const [DocId, SetDocId] = useState("");
     const [date, setDate] = useState("");
     const [dueDate, setDueDate] = useState("");
     const [name, setName] = useState("");
     const [receiptAddress, setReceiptAddress] = useState(""); 
     const [deliveryAddress, setDeliveryAddress] = useState("");
     const [refId, setRefId] = useState("");
     const [currency, setCurrency] = useState("");

     const [currencyOption] = useState([
          "USD $",
          "EUR €",
          "GBP £",
          "JPY ¥",
          "AUD $",
          "CAD $",
          "THB ฿"
     ])

     const input_detail = 
     [
          {
               name:"Doc ID",
               type:"text",
               value:DocId,
               onChange: (e) => SetDocId(e.target.value)
          },
          {
               name:"Issue Date",
               type:"date",
               value:date,
               onChange: (e) => setDate(e.target.value)
          },
          {
               name:"Due Date",
               type:"date",
               value:dueDate,
               onChange: (e) => setDueDate(e.target.value)
          },
          {
               name:"Name",
               type:"text",
               value:name,
               onChange: (e) => setName(e.target.value)
          },
          {
               name:"Receipt Address",
               type:"text",
               value:receiptAddress,
               onChange: (e) => setReceiptAddress(e.target.value)
          },
          {
               name:"Delivery Address",
               type:"text",
               value:deliveryAddress,
               onChange: (e) => setDeliveryAddress(e.target.value)
          },
          {
               name:"Ref ID",
               type:"text",
               value:refId,
               onChange: (e) => setRefId(e.target.value)
          },
     ]

     // {
     //      name:"Currency",
     //      type:"text",
     //      value:currency,
     //      onChange: (e) => setCurrency(e.target.value)
     // },
     return (
          <div className="w-auto h-auto m-5 p-6 border-2 rounded-t-lg">
               <div className="grid grid-cols-4 gap-x-10 gap-y-8 max-w-[60vw]">
                    {input_detail.map((input, index) => (
                         <input
                              key={index}
                              type={input.type}
                              value={input.value}
                              onchange={input.onChange}
                              placeholder={input.name}
                              className="rounded-xl p-2 border-2"
                         />
                    ))}
                    <div>
                         <input
                              list="Currency"
                              value={currency}
                              onChange={(e) => setCurrency(e.target.value)}
                              placeholder='Type or select an option'
                              className="rounded-xl p-2 w-full border-2"
                         />
                         <datalist id="Currency">
                              {currencyOption.map((option, index) => (
                                   <option key={index} value={option} />
                              ))}
                         </datalist>
                    </div>
               </div>
          </div>
     )
}

export default ReceiptDetail