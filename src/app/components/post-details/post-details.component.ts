import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { JsonPipe, DatePipe, NgFor, NgIf, CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [JsonPipe, DatePipe, NgFor, NgIf, IconComponent],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss',
})
export class PostDetailsComponent {
  @Input() post: any | null = null;
  @Output() closePost = new EventEmitter<any>();

  resetPost() {
    console.log('resetPost');
    this.closePost.emit(null);
  }
}
