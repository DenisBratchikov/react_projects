import React from 'react';
import style from './Card.module.css';

export interface ICardProps {
    children: React.ReactNode;
    className?: string;
}

export default function Card(props: ICardProps) {
    return (
        <div className={`${style.card} ${props.className}`}>{props.children}</div>
    )
}
