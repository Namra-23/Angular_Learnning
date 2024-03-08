import { Component } from '@angular/core';
import EditorJS from '@editorjs/editorjs';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {
  editor = new EditorJS({ 
    holder: 'editorjs', 
    tools: { 
      // header: Header, 
      // list: List 
    }, 
  })
}
