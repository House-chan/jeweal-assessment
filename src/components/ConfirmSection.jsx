import React from 'react'

const ConfirmSection = ({handleSaving, handleCancel}) => {
  return (
     <section className="w-full flex justify-end border-t-2 p-5">
		<button
			className="mr-5 border py-2 w-20"
			onClick={handleCancel}
		>
			Cancel
		</button>
          <button
			className="mr-5 border py-2 w-20"
			onClick={handleSaving}
		>
			Save
		</button>
     </section>
  )
}

export default ConfirmSection