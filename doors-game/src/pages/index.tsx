import React from 'react'
import { useRouter } from 'next/router'

import styles from '../styles/Home.module.css'

export default function Home() {

    const router = useRouter()

    const inputDoorRef = React.useRef<HTMLInputElement>(null)
    const inputDoorErrorRef = React.useRef<HTMLSpanElement>(null)

    const inputPrizedDoorRef = React.useRef<HTMLInputElement>(null)
    const inputprizedDoorErrorRef = React.useRef<HTMLSpanElement>(null)

    /**
     * Verify if form is valid
     */
    const isFormValid = React.useCallback((doors: number, prizedDoor: number) => {
        inputDoorErrorRef.current.innerText = ''
        inputprizedDoorErrorRef.current.innerText = ''

        inputDoorErrorRef.current.innerText = doors < 3 ? 'Informe pelo menos 3 portas' : ''
        inputprizedDoorErrorRef.current.innerText = prizedDoor < 1 || prizedDoor > doors  ? 'Porta premiada inválida' : ''

        return !inputDoorErrorRef.current.innerText && !inputprizedDoorErrorRef.current.innerText
    }, [])

    /**
     * Perform form submit
     */
    const handleSubmit = React.useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        const doors = Number(inputDoorRef.current.value)
        const prizedDoor = Number(inputPrizedDoorRef.current.value)

        if (isFormValid(doors, prizedDoor)) {
            router.push(`/game/${doors}/${prizedDoor}`)
        }
    }, [isFormValid, router])

    const handleFormCleanButtonClick = React.useCallback(() => {
        inputDoorRef.current.value = ''
        inputPrizedDoorRef.current.value = ''
        inputDoorErrorRef.current.innerText = ''
        inputprizedDoorErrorRef.current.innerText = ''
    }, [])

    return (
        <form  onSubmit={handleSubmit} noValidate className={styles.container}>
            
            <h1>Porta dos desesperados!</h1>

            <div className={styles.menu}>
                <div className={styles['menu-01']}>
                    <p>Portas</p>
                </div>
                <div className={styles['menu-02']}>
                    <div className={styles['input-container']}>
                        <input 
                            type="number" 
                            min="1" 
                            max="99"
                            name="doors" 
                            ref={inputDoorRef} 
                        />
                        <span 
                            ref={inputDoorErrorRef}>
                        </span>
                    </div>
                </div>
                <div className={styles['menu-03']}>
                    Porta premiada
                </div>
                <div className={styles['menu-04']}>
                    <div className={styles['input-container']}>
                        <input 
                            type="number"
                            min="1" 
                            max="99"
                            name="prizedDoor" 
                            ref={inputPrizedDoorRef} 
                        />
                        <span 
                            ref={inputprizedDoorErrorRef}>
                        </span>
                    </div>
                </div>
            </div>

            <div className={styles.actions}>
                <button 
                    type="submit"
                >
                    Jogar
                </button>
                
                <button 
                    type="button" 
                    onClick={handleFormCleanButtonClick}
                >
                    Limpar
                </button>
            </div>
        </form>
    )
}