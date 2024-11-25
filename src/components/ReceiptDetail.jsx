import React from 'react'
import { useState } from 'react'

const ReceiptDetail = ({userDetail, setUserDetail}) => {
     // const [DocId, SetDocId] = useState("");
     // const [date, setDate] = useState("");
     // const [dueDate, setDueDate] = useState("");
     // const [name, setName] = useState("");
     // const [receiptAddress, setReceiptAddress] = useState(""); 
     // const [deliveryAddress, setDeliveryAddress] = useState("");
     // const [refId, setRefId] = useState("");
     // const [currency, setCurrency] = useState("");

     const [currencyOption] = useState([
          "USD $",
          "EUR €",
          "GBP £",
          "JPY ¥",
          "AUD $",
          "CAD $",
          "THB ฿"
     ])

     const handleChange = (field, value) => {
          setUserDetail({...userDetail, [field]: value});
     }
     
     const input_detail = 
     [
          {
               placeholder:"Doc ID",
               type:"text",
               value:userDetail.docId,
               onChange: (e) => handleChange("docId", e.target.value)
          },
          {
               placeholder:"Issue Date",
               type:"date",
               value:userDetail.date,
               onChange: (e) => handleChange("date", e.target.value)
          },
          {
               placeholder:"Due Date",
               type:"date",
               value:userDetail.dueDate,
               onChange: (e) => handleChange("dueDate", e.target.value)
          },
          {
               placeholder:"Name",
               type:"text",
               value:userDetail.name,
               onChange: (e) => handleChange("name", e.target.value)
          },
          {
               placeholder:"Receipt Address",
               type:"text",
               value:userDetail.receiptAddress,
               onChange: (e) => handleChange("receiptAddress", e.target.value)
          },
          {
               placeholder:"Delivery Address",
               type:"text",
               value:userDetail.deliveryAddress,
               onChange: (e) => handleChange("deliveryAddress", e.target.value)
          },
          {
               placeholder:"Ref ID",
               type:"text",
               value:userDetail.refId,
               onChange: (e) => handleChange("refId", e.target.value)
          },
     ]

     return (
          <section className="w-auto h-auto p-6 border-2 rounded-t-lg">
               <div className="grid grid-cols-4 gap-x-10 gap-y-8 max-w-[60vw]">
                    {input_detail.map((input, index) => (
                         <input
                              key={index}
                              {...input}
                              className="rounded-xl p-2 border-2"
                         />
                    ))}
                    <div>
                         <input
                              list="Currency"
                              value={userDetail.currency}
                              onChange={(e) => handleChange("currency", e.target.value)}
                              placeholder='Type or select a Currency'
                              className="rounded-xl p-2 w-full border-2"
                         />
                         <datalist id="Currency">
                              {currencyOption.map((option, index) => (
                                   <option key={index} value={option} />
                              ))}
                         </datalist>
                    </div>
               </div>
          </section>
     )
}

export default ReceiptDetail