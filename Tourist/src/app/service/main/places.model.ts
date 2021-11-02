export class offers
{
    constructor(
        public select: boolean,
        public id : number,
        public image: string,
        public place: string,
        public packagename:string,
        public noofdays:number,
        public cost:number,
        public discount:number
    )
    {

    }

}