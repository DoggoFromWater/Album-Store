import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCommentComponent } from './new-comment/new-comment.component';
import { EditCommentComponent } from './edit-comment/edit-comment.component';
import { isLoggedActivate } from '../shared/guards/isLogged.activate';
import { isOwnerOfCommentActivate } from '../shared/guards/is-owner-of-comment.activate';

const routes: Routes = [
  {
    path: ':id/new',
    canActivate: [isLoggedActivate],
    component: NewCommentComponent,
  },
  {
    path: ':id/edit/:index',
    canActivate: [isOwnerOfCommentActivate],
    component: EditCommentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentsRoutingModule {}
