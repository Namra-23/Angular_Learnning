import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-ag-grid',
  standalone: true,
  imports: [AgGridAngular, AgGridModule],
  templateUrl: './ag-grid.component.html',
  styleUrl: './ag-grid.component.css'
})
export class AgGridComponent implements OnInit {
  url: string = "https://jsonplaceholder.typicode.com/comments";
  commentList?: any;
  constructor(private http: HttpClient) { };

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.http.get(this.url).subscribe((res) => {
      this.commentList = res;
    })
  }

  colDefs: ColDef[] = [
    {
      field: "id", headerName: "userId",
      cellRenderer: (item: any) => {
        return "Emp-" + item.value;
      }
    },
    //If you want to add some custom things into your Column then use cellRenderer ex.(If your current column has only id and you want to do Emp-id then use it)
    {
      field: "name", headerName: "Name",
      cellRenderer: (item: any) => {
        return "Joshi " + item.value;
      },
      filter:true
    },
    { field: "email", headerName: "Email" },
    { field: "body", headerName: "Body" },
  ]
  defaultColDef = {
    flex: 1,
    minWidth: 100
  }
}
