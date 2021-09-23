import { useState } from "react"
import { Dialog } from "@headlessui/react"

export function MyDialog({openModal, closeModal}): JSX.Element {
  // const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog open={openModal} onClose={closeModal} className="fixed z-10 inset-0 overflow-y-auto" >

      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-20" />
        <div className="relative bg-white rounded max-w-sm mx-auto">
          <Dialog.Title>Deactivate Account</Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account.
          </Dialog.Description>
          <p>
            Are you sure you want to deactivate your account? All of your data will
            be permanently removed. This action cannot be undone.
          </p>

          <button onClick={closeModal} >Deactivate</button>
          <button onClick={closeModal} >Cancel</button>
        </div>
      </div>
    </Dialog>
  )
}