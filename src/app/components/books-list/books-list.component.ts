import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent implements OnInit {
  Books: any = [];
  constructor(private crudService: CrudService) {
    this.crudService.GetBooks().subscribe((data: any) => {
      this.Books = data;
    });
  }
  ngOnInit() {}
  delete(id: any, i: any) {
    if (window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteBook(id).subscribe((data: any) => {
        this.Books.splice(i, 1);
      });
    }
  }
}