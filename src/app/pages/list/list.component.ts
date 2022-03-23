import { PostModalService } from './../post/post.component.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { PostService } from 'src/app/core/services/post.service';
import { Post } from 'src/app/core/models/post';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  postsOriginal: Post[] = [];
  posts: any[] = [];
  users: User[] = [];

  displayedColumns: string[] = ['id', 'userId', 'title', 'edit'];

  term: string = '';

  constructor(
    private _modal: NgbModal,
    private _post: PostService,
    private _user: UserService,
    private _toastr: ToastrService,
    private _postModal: PostModalService
  ) { }

  ngOnInit() {
    this.loadPosts();
    this.loadUsers();
  }

  async loadUsers() {
    try {
      this.users = await this._user.getUsers();
    } catch (error) {
      this._toastr.error('Não foi possível carregar os usuários.');
    }
  }

  async loadPosts() {
    try {
      this.postsOriginal = await this._post.getPosts();
      this.posts = this.postsOriginal;
    } catch (error) {
      this._toastr.error('Não foi possível carregar os posts.');
    }
  }

  handleSearch(event: any) {
    this.posts = this.postsOriginal.filter(p => p.userId === event.value);
  }

  async handleOpenModal(post?: Post) {
    const itemChanged = await this._postModal.open(post);
    if (itemChanged) {
      if (itemChanged.id) {
        this._post.updatePost(itemChanged);
      } else {
        this._post.createPost(itemChanged);
      }
    }
  }

  getUser(userId: number) {
    return this.users.find(u => u.id === userId)?.name;
  }
}
