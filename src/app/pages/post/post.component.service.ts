import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from 'src/app/core/models/post';
import { PostComponent } from './post.component';

@Injectable()
export class PostModalService {

  constructor(private _modal: NgbModal) {}

  open(post?: Post): Promise<Post> {
    const modal = this._modal.open(PostComponent, {
      centered: true,
      size: 'xl'
    });

    const instance: PostComponent = modal.componentInstance;

    instance.post = post;

    return modal.result;
  }
}
