import { Component, OnInit } from '@angular/core';

interface Book {
  name: string;
  author: string;
}

@Component({
  selector: 'app-form-app',
  templateUrl: './form-app.component.html',
  styleUrls: ['./form-app.component.scss']
})
export class FormAppComponent implements OnInit {

  books: Book[];
  selectedBook: string | undefined;

  constructor() {

   this.books = [
      {name: 'Book1', author: 'Author1'},
      {name: 'Book2', author: 'Author2'},
      {name: 'Book3', author: 'Author3'},
      {name: 'Book4', author: 'Author4'},
      {name: 'Book5', author: 'Author5'}
  ];
   }

   selectedState: any = null;

   states: any[] = [
       {name: 'Arizona', code: 'Arizona'},
       {name: 'California', value: 'California'},
       {name: 'Florida', code: 'Florida'},
       {name: 'Ohio', code: 'Ohio'},
       {name: 'Washington', code: 'Washington'}
   ];

   cities1: any[] = [];
   
   cities2: any[] = [];
   
   city1:any = null;

   city2:any = null;

  ngOnInit() {
     }


}
