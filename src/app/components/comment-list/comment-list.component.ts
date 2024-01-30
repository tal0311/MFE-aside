import { Component, Input, OnInit } from '@angular/core';
import { CommonModule ,NgFor, DatePipe, NgIf} from '@angular/common';
import { UserPreviewComponent } from '../user-preview/user-preview.component';

@Component({
  selector: 'app-comment-list',
  standalone: true,
  imports: [CommonModule, UserPreviewComponent, NgFor, DatePipe],
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.scss',
})
export class CommentListComponent implements OnInit {
  @Input() comments: any[] | null = null;
  @Input() owner: any | null = null;
  

  ngOnInit() {
    console.log('comments', this.comments);
  }
}
