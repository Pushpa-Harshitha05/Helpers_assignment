import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';

export interface Language {
  name: string;
  completed: boolean;
  languages?: Language[];
}

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [
    FormsModule,
    MatCheckboxModule,
    CommonModule
  ],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent {
  readonly language = signal<Language>({
    name: 'Select All',
    completed: false,
    languages: [
      {name: 'Telugu', completed: false},
      {name: 'English', completed: false},
      {name: 'Hindi', completed: false},
      {name: 'Tamil', completed: false},
      {name: 'Malayalam', completed: false},
      {name: 'Kannada', completed: false},
    ],
  });

  readonly partiallyComplete = computed(() => {
    const lang = this.language();
    if (!lang.languages) {
      return false;
    }
    return lang.languages.some(l => l.completed) && !lang.languages.every(l => l.completed);
  });

  update(completed: boolean, index?: number) {
    this.language.update(lang => {
      if (index === undefined) {
        lang.completed = completed;
        lang.languages?.forEach(l => (l.completed = completed));
      } else {
        lang.languages![index].completed = completed;
        lang.completed = lang.languages?.every(l => l.completed) ?? true;
      }
      return {...lang};
    });
  }
}
