import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

import { Post } from 'src/app/core/models/post';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post?: Post = {
    id: 0,
    userId: 0,
    title: '',
    completed: true
  };

  submit: true

  form: FormGroup;

  userId = 0;

  constructor(
    private activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      completed: true
    });

    if (this.post?.title?.length) {
      this.form.patchValue({
        title: this.post.title,
        completed: this.post.completed
      });
    }
  }

  handleSubmit() {
    if (this.form.invalid) {
      this.toastr.error('Não foi possível salvar');
      this.submit = true;
      return;
    }

    if (this.post?.title) {
      this.post.title = this.form.value.title;
    }
    if (this.post?.completed) {
      this.post.completed = this.form.value.completed;
    }

    this.toastr.success('A postagem foi salva');
    this.modalClose(this.post);
  }

  modalClose(result?: any) {
    this.activeModal.close(result);
  }
}
