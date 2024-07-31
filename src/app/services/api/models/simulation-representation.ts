export interface SimulationRepresentation {
   
    id?: number
    name: string
    populationSize: number
    startingPopulationSize: number
    spreadRatio: number
    deathRatio: number
    deathTime: number
    recoveryTime: number
    simulationTime: number
    populationIdList: Array<number> []

}