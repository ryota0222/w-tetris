import { useModalContext } from '@/contexts/ModalProvider'
import Modal from 'react-modal'
import css from '@/styles/modal.module.css'

interface Props {
  label?: string
}

const ModalContainer: React.FC<Props> = ({ children, label = 'modal' }) => {
  const { isModalOpen, closeModal } = useModalContext()
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel={label}
      overlayClassName={{
        base: css.overlay_base,
        afterOpen: '',
        beforeClose: '',
      }}
      className={{
        base: css.content_base,
        afterOpen: css.content_after,
        beforeClose: css.content_before,
      }}
      closeTimeoutMS={200}
    >
      {children}
    </Modal>
  )
}

export default ModalContainer
