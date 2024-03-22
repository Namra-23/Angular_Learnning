import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';

@Component({
  selector: 'app-mark-down',
  standalone: true,
  imports: [],
  templateUrl: './mark-down.component.html',
  styleUrl: './mark-down.component.css'
})
export class MarkDownComponent {
  public paragraphForm: FormGroup;
  public isDropdownOpen: boolean = false;
  public options = {
    showPreviewPanel: true,
    hideIcons: ['Heading', 'Code', "Link"],
    usingFontAwesome5: true,
    // fontAwesomeVersion: '"5"',
    enablePreviewContentClick: true,
  };

  constructor(private fb: FormBuilder) { }

  gadgets = [
    { id: 1, name: 'smartphone' },
    { id: 2, name: 'laptop' },
    { id: 3, name: 'desktop' },
    { id: 4, name: 'tv' },
  ];

  ngOnInit() {
    this.initParagraphForm();
  }

  initParagraphForm() {
    this.paragraphForm = this.fb.group({
      title: this.fb.control(''),
      parentParagraph: this.fb.control(null),
      resourceName: this.fb.control(null),
      template: this.fb.control(null),
    });
  }

  saveAsDraft() {
  }

  toggleDropdown() {
    var dropdownMenu = document.getElementById('dropdownMenu');

    dropdownMenu?.classList.toggle('open');
  }
}
