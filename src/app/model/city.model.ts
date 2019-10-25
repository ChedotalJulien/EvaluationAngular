  export interface City{
      id:string;
      name:string;
      photo:string;
      description:string;

      _links:{
        self:{
          href:string;
        },
        city:{
          href:string
        },
        hotel:{
          href:string;
        }
      }
  }
