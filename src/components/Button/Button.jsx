import PropTypes from 'prop-types';
import css from './Button.module.css';

export function Button({ onClickLoadMore }) {
    return (
        <button
            type='button'
            onClick={onClickLoadMore}
            className={css.Button}>
            Load more
        </button>
    );
};

Button.propTypes = {
    onClickLoadMore: PropTypes.func.isRequired,
};