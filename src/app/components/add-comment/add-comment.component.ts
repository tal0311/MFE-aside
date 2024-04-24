import { Component, EventEmitter, Output, signal } from '@angular/core';
import { Signal} from '@angular/core';




@Component({
  selector: 'app-add-comment',
  standalone: true,
  imports: [],
  templateUrl: './add-comment.component.html',
  styleUrl: './add-comment.component.scss',
})
export class AddCommentComponent {
  @Output() addCommentToPost = new EventEmitter<any>();
  comment = { txt: '' };

  addComment(ev: Event): void {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    const formData = Object.fromEntries(new FormData(form) as unknown as Iterable<[string, any]>);
    console.log(formData);
    this.addCommentToPost.emit(formData)
  }
}

