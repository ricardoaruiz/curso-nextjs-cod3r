import React from 'react'

import { Gift } from '../Gift'
import DoorModel from '../../model/door'

import styles from './styles.module.css'

type DoorProps = {
    value: DoorModel
    onChange: (door: DoorModel) => void
}

export const Door: React.VFC<DoorProps> = ({ value, onChange }) => {

    const { selected, number, isOpen, hasGift } = value

    /**
     * Define door frame classes
     */
    const doorFrameClasses = React.useMemo(() => `
        ${styles['door-frame']} 
        ${selected && !isOpen ? styles['door-frame-selected'] : ''}
        ${isOpen ? styles['door-frame-closed'] : ''}
    `, [isOpen, selected])

    /**
     * Select a door
     */
    const select = React.useCallback((door: DoorModel) => {
        onChange(door.toggleSelect())
    }, [onChange])

    /**
     * Open a door
     */
    const open = React.useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>, door: DoorModel) => {
        e.stopPropagation()
        onChange(door.open().unselect())
    }, [onChange])

    /**
     * Render a closed door
     */
    const renderClosedDoor = React.useCallback(() => {
        return !isOpen && (
            <div className={styles.door} >
                <div className={styles['door-number']}>{number}</div>
                <div 
                    className={styles['door-handle']} 
                    onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => open(e, value)}
                ></div>
            </div>
        )
    }, [isOpen, number, open, value])

    /**
     * Render the gift when the correct door was opened
     */
    const renderGift = React.useCallback(() => {
        return isOpen && hasGift && (
            <div className={styles['gift-container']}>
                <Gift />
            </div>
        )
    }, [hasGift, isOpen])

    return (
        <div className={styles['door-area']} onClick={() => select(value)}>
            <div className={doorFrameClasses}>
                {renderClosedDoor()}
                {renderGift()}
            </div>
            <div className={styles.floor}></div>
        </div>
    )
}


