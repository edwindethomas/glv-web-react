import './modal.css';

const Modal = ({handleClose,show,childen}) => {

    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

   return (<div className={showHideClassName}>
            <section className="modal-main">
                <p>{childen}</p>
                <button type='button' onClick={handleClose} className="btn">
                    X
                </button>
            </section>
    </div>);
}

export default Modal;