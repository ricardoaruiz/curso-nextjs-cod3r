import { NextPage } from "next"
import { useRouter } from 'next/router'

import { Button, Statistic } from "../components"

import styles from '../styles/Result.module.css'

const Result: NextPage = () => {
    const router = useRouter()

    const total = router.query.total ? +router.query.total : 0
    const corrects = router.query.corrects ? +router.query.corrects : 0
    const percent = Math.round((corrects / total) * 100)

    return (
        <div className={styles.result}>
            <h1>Resultado final</h1>

            <div className={styles.values}>
                <Statistic 
                    text="Perguntas" 
                    value={total}  
                />
                <Statistic 
                    text="Certas" 
                    value={corrects} 
                    backgroundColor="#9cd2a4" 
                />
                <Statistic 
                    text="Percentual" 
                    value={`${percent}%`} 
                    backgroundColor="#de6a33"
                />
            </div>

            <div className={styles.actions}>
                <Button href="/">Jogar novamente</Button>
            </div>
        </div>
    )
}

export default Result