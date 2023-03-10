import React from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'

import './Modal.css'
import BackDrop from '../Backdrop/Backdrop'

const ModalOverlay = (props) => {
    const content =
        <div className={`modal ${props.className}`} style={props.style}>
            <header className={`modal__header ${props.headerClass}`}>
                <h2>{props.header}</h2>
            </header>
            <form onSubmit={props.onSubmit ? props.onSubmit : (e) => e.preventDefault()}>
                <div className={`modal__content ${props.contentClass}`}>
                    {props.children}
                </div>
            </form>
            <footer className={`modal__footer ${props.footerClass}`}>
                <h2>{props.footer}</h2>
            </footer>
        </div>
    return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
}
function Modal(props) {
    return (
        <React.Fragment>
            {props.show && <BackDrop onClick={props.onCancel} />}
            <CSSTransition
                in={props.show}
                mountOnEnter
                unmountOnExit
                timeout={200}
                classNames="modal"
            >
                <ModalOverlay {...props} />
            </CSSTransition>

        </React.Fragment>
    )
}

export default Modal