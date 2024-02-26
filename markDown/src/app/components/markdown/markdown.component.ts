import { Component } from '@angular/core';

@Component({
  selector: 'app-markdown',
  standalone: true,
  imports: [],
  templateUrl: './markdown.component.html',
  styleUrl: './markdown.component.css'
})
export class MarkdownComponent {
  markdownContent = '';
  editorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '200px',
    placeholder: 'Enter your markdown content here...',
  };
}
