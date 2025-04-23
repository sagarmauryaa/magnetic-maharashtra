'use client';
import Link from 'next/link';
import './index.scss';

const Button = ({
    tag = 'a',
    text,
    type = 'button',
    href = '',
    onClick = () => { },
    disabled = false,
    loading = false,
    variant = 'primary',
    size,
    className,
    target,
    rel,
    ...props
}) => {

    const classes = [
        'm-button',
        className ?? '',
        loading ? 'm-button--loading' : '',
        variant ? 'm-button--' + variant : '',
        size ? 'm-button--' + size : ''
    ].join(' ').trim();

    if (tag === 'a' || !type) {
        return (
            <Link className={classes} href={href} target={target} rel={rel} {...props}>
                <span className="m-button__text">{text}</span>
            </Link>
        );
    } else {
        return (
            <button type={type} onClick={onClick} className={classes} {...props} disabled={disabled}>
                <span className="m-button__text">{text}</span>
                {
                    loading ?
                        <span className="m-button__loading">
                            <span className="m-button__loading-container">
                                <span className="m-button__loading-dot m-button__loading-dot--one"></span>
                                <span className="m-button__loading-dot m-button__loading-dot--two"></span>
                                <span className="m-button__loading-dot m-button__loading-dot--three"></span>
                            </span>
                        </span>
                        : ''}
            </button>
        );
    }
}

export default Button;