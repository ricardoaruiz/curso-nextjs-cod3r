import DoorModel from '../model/door'

/**
 * Create an array of doors
 * @param quantity 
 * @param prizedDoor 
 * @returns array of doors
 */
export const createDoors = (quantity: number, prizedDoor: number): DoorModel[] => {
    return Array.from({ length: quantity }, (_, i) => {
        const number = i + 1
        const hasGift = number === prizedDoor
        return new DoorModel(number, false, hasGift)
    })
}

/**
 * Build a new door array with changed door
 * @param doors 
 * @param changedDoor 
 * @returns new door array with changed door
 */
export const updateDoors = (doors: DoorModel[], changedDoor: DoorModel): DoorModel[] => {
    return doors.map(currentDoor => {
        if (currentDoor.number === changedDoor.number) {
            return changedDoor
        }
        return changedDoor.isOpen ? currentDoor : currentDoor.unselect()
      })
}