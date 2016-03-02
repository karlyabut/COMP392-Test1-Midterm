/// <reference path="../../typings/tsd.d.ts"/>

//Author: Karl Eisen Yabut (300699795)
//Date modified: March 2, 2016
//Program description: Tapered Tower (Midterm)
// first commit: Initial commit
// second commit: finished

module objects {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Control { 
        rotation1: number;
        rotation2: number;
        rotation3: number;
        rotation4: number;
        rotation5: number;
        
        
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(rotation1: number, rotation2: number, rotation3: number, rotation4: number, rotation5: number) {
            this.rotation1 = rotation1;
            this.rotation2 = rotation2;
            this.rotation3 = rotation3;
            this.rotation4 = rotation4;
            this.rotation5 = rotation5;
        }
        
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
       public rotateTower1(): void{
           this.rotation1 = 0;
       }
       public rotateTower2(): void{
           this.rotation2 = 0;
       }
       public rotateTower3(): void{
           this.rotation3 = 0;
       }
       public rotateTower4(): void{
           this.rotation4 = 0;
       }
       public rotateTower5(): void{
           this.rotation5 = 0;
       }
    }
}
