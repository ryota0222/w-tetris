import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import Modal from 'react-modal'

interface ModalContextType {
  isModalOpen: boolean
  openModal: () => void
  closeModal: () => void
}

Modal.setAppElement('#root')

const ModalContext = createContext<ModalContextType>({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
})

export const ModalProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = useCallback(() => setIsOpen(true), [])
  const closeModal = useCallback(() => setIsOpen(false), [])
  const value = useMemo(() => {
    return { isModalOpen: isOpen, openModal, closeModal }
  }, [isOpen, openModal, closeModal])
  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

export const useModalContext = () => useContext(ModalContext)
