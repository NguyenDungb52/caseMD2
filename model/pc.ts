export class PC {
    private name  : string
    private status : boolean
    private time : Date


 

    constructor(name : string) {
        this.name = name
        this.status = false
        this.time = new Date()
    }
    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getStatus() : boolean{
            return this.status
    }
    public setStatus( status : boolean) : void{
            this.status = status
    }
    public getTime() :Date{
        return this.time
    }
    public setTime( time : Date) :void {
            this.time = time
    }


}