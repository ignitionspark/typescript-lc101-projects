import { Payload} from './Payload';
import { Astronaut} from './astronaut';
import { Cargo} from './cargo';
export class Rockets {
    name: string;
    totalCapacityKg : number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor( name: string, totalCapacityKg: number ){
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
    
    }
    // sumMass( items: Payload[] ): number {
    //     let sumMass: number = 0;
    //     items.forEach(element => {
    //         sumMass+= element.massKg;
    //     });
    //     return sumMass
    //     }
    // }
    sumMass (items: Payload[]): number {
        let sum: number = 0;
        for (let i=0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    }

    currentMassKg (): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }

    canAdd(item: Payload): boolean {
        return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}