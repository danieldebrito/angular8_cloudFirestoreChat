import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Mensaje } from '../../app/interfaces/mensaje.unterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<any>;

  public chats: Mensaje[] = [];

  // importo el servicio de firestores segun la documentacion de algularFire2
  constructor(private afs: AngularFirestore) { }

  cargarMensajes() {
                                                                        // ordeno por fecha los mensajes
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha', 'desc')
    .limit(5));

    // para estar pendientes de todos los cambios
    return this.itemsCollection.valueChanges().pipe(
      map((mensajes: Mensaje[]) => {
        console.log(mensajes);
        this.chats = [];

        for ( const mensaje of mensajes ) {
          this.chats.unshift( mensaje );
        }

        return this.chats;
      })
    );
  }

  agregarMensaje( texto: string ) {
    const mensaje: Mensaje = {
      nombre: 'test',
      mensaje: texto,
      fecha: new Date().getTime()
    };
    return this.itemsCollection.add( mensaje );
  }
}
