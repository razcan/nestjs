import { Injectable,HttpService, HttpModule } from '@nestjs/common';

export interface Movie {
  id: number;
  name: string;
  year: number;
}

export interface Partner {
  id: number;
  name: string;
  cui: number;
}


@Injectable()
export class AppService { 
  constructor(private httpService: HttpService) {}

  private movies: Movie[] = [
    { id: 1, name: 'Star Wars KKT: The Force Awakens', year: 2015 },
    { id: 2, name: 'Star Wars ttt: The Last Jedi', year: 2017 },
    { id: 3, name: 'Star Wars: The Rise of Skywalker', year: 2019 },
  ];

  private partner: Partner[] = [
    { id: 1, name: 'Partener1', cui: 20152015 },
    { id: 2, name: 'Partener1', cui: 2015017 },
    { id: 3, name: 'Partener1', cui: 20152019 },
  ];

  getMovies(): Movie[] {
    return this.movies;
  }

  getPartners(): Partner[] {
    return this.partner;
  }

}

function handleInterval() {
  throw new Error('Function not implemented.');
}
