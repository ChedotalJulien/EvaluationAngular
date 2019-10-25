  export interface Hotel{
      id:number;
      name:string;
      description:string;
      currentPrice:number;
      promotion:boolean;
      selected:boolean;
      available:boolean;
      photoName:string;
      quantity:number;

      _links:{
        self:{
          href:string;
        },
        hotel:{
          href:string;
        },
        city:{
          href:string
        }
      }

  }
