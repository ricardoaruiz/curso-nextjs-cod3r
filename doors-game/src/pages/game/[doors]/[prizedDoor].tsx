import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'

import { createDoors, updateDoors } from '../../../functions/doors'
import { Door } from "../../../components";
import DoorModel from '../../../model/door'

import styles from './styles.module.css'

export default function Game() {

  const router = useRouter()
  const [doors, setDoors] = React.useState([])

  /**
   * Handle changes in a door (select and open)
   */
  const handleChangeDoor = React.useCallback((door: DoorModel) => {
    setDoors(currentDoors => updateDoors(currentDoors, door))
  }, [])

  /**
   * Render doors
   */
  const renderDoors = React.useCallback(() => doors.map(
    door => <Door 
        key={door.number} 
        value={door}
        onChange={handleChangeDoor}
      />)
  , [doors, handleChangeDoor])

  /**
   * Check is query params is ok to render view
   * If not, send to menu view
   */
  React.useEffect(() => {
    const initialize = () => {
      if (router.query.doors && router.query.prizedDoor) {
        const doors = +router.query.doors
        const prizedDoor = +router.query.prizedDoor

        const hasValidNumericsParam = !isNaN(doors) && !isNaN(prizedDoor)
        const hasMinimalDoors = doors >= 3
        const hasValidPrizedDoor = prizedDoor >= 1 && prizedDoor <= doors
        const isOk = hasValidNumericsParam && hasMinimalDoors && hasValidPrizedDoor

        return isOk ? setDoors(createDoors(doors, prizedDoor)) : router.push("/")  
      }
    }
    initialize()
  }, [router, router.query])

  return (
    <section className={styles['game-container']}>

      <h1 className={styles['game-title']}>
        Porta dos desesperados!!!!
      </h1>

      <hr style={{ width: '100%' }}/>

      <div className={styles['game-content']}>
        {renderDoors()} 
      </div>

      <hr style={{ width: '100%' }}/>

      <div className={styles['game-controls']}>
        <Link href="/" passHref>
          <button type="button">Reiniciar jogo</button>        
        </Link>
      </div>
     
    </section>
  )
}
