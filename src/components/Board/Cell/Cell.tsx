import React from 'react';

import styles from './Cell.module.scss';

type BorderProps = {
    left?: boolean,
    top?: boolean,
    right?: boolean,
    bottom?: boolean
}

type CellProps = {
    active: boolean,
    digit: number | null,
    given: boolean,
    borders?: BorderProps,
    thickBorders?: BorderProps,
    handleMouseDown: () => any,
    handleMouseEnter: () => any,
    handleClick: () => any
}

const cell = ({
    active,
    digit,
    given,
    borders,
    thickBorders,
    handleMouseDown,
    handleMouseEnter,
    handleClick
}: CellProps) => {
    const cellStyles = [styles.cell];

    if (active) cellStyles.push(styles.active)
    if (given) cellStyles.push(styles.given)

    if (borders?.left) cellStyles.push(styles.left);
    if (borders?.right) cellStyles.push(styles.right);
    if (borders?.top) cellStyles.push(styles.top);
    if (borders?.bottom) cellStyles.push(styles.bottom);

    if (thickBorders?.left) cellStyles.push(styles.thickLeft);
    if (thickBorders?.top) cellStyles.push(styles.thickTop);

    return (
        <div 
            className={cellStyles.join(' ')}
            onMouseDown={ () => handleMouseDown() }
            onMouseEnter={ () => handleMouseEnter() }
            onClick={ () => handleClick() }
        >{ digit }</div>
    )
}

export default cell; 