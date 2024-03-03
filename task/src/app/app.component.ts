import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AgGridComponent } from "./components/ag-grid/ag-grid.component";
import { AgGridSearchComponent } from "./components/ag-grid-search/ag-grid-search.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, AgGridComponent, AgGridSearchComponent]
})
export class AppComponent {
  title = 'task';
}
