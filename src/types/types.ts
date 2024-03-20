
interface Quote {
    img: string;
    quote: string;
  }
  
  interface Position {
    id: string;
    date: string;
    img: string;
    companyName: string;
    location: string;
    status: string;
    joining: string;
    currentCompany: boolean;
    quotes: Quote[];
    position: string;
    jobType: string;
  }
  
 export interface Details {
    id: number;
    name: string;
    label: string;
    profilePicture: string;
    profilePictureFull: string;
    bio: string;
    positions: Position[];
    logo: string;
    logoName: string;
  }
      
 export interface Users {
    value: string,
    label: string,
    id:number
}

export interface Quotes {
    img: string;
    quote: string;
}