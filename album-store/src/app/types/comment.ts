import { DocumentReference } from '@angular/fire/firestore';

export interface Comment {
  comment: string;
  user: DocumentReference;
}
