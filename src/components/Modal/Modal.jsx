import React, { Component } from "react";
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    static propTypes = {
        onClose: PropTypes.func.isRequired,
        children: PropTypes.element,
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleCloseByEsc);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleCloseByEsc);
    };

    handleCloseByEsc = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleCloseByOverlay = e => {
        if (e.code === e.currentTarget) {
            this.props.onClose();
        }
    };

    render() {
        const { children } = this.props;

        return createPortal(
            <div className={css.Overlay} onClick={this.handleCloseByOverlay}>
                <div className={css.Modal}>
                    {children}
                </div>
            </div>,
            modalRoot
        );
    };
};

export default Modal;