import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Itokens } from '../Interface/itokens';
import { Ivideo } from '../Interface/ivideo';
import { Video } from '../model/video';

@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {
  url = 'http:localhost:8080/api/v1/video'

  constructor(private http: HttpClient) { }

  //Affficher toutes les video

  getAll(): Observable<any> {
    return this.http.get(`http://localhost:8080/api/v1/video/all`);
  }


  urlvideo = "http://localhost:8080/api/v1/video/posts/create"
  //methode permettant d'ajouter une video
  ajouterBoutique(titre: any, imagecouverture: any, url: any): Observable<any> {
    console.log("titre : " + titre + "imagecouverture: " + imagecouverture + "url: " + url)
    const data = new FormData()
    data.append('titre', titre);
    data.append('imagecouverture', imagecouverture);
    data.append('url', url);

    console.log("video ajouter")

    return this.http.post<any>("http://localhost:8080/api/v1/video/posts/create", data)
  }





  /*const titre:FormData = new FormData()
  const imagecouverture:FormData = new FormData();
  const url : FormData= new FormData();
 
  titre.append('titre',titr);
  imagecouverture.append('imagecouverture',imagecouvertur);
  url.append('url',ur);
 */
  // const formData = new FormData();


  // console.log("titre : " + titre + "imagecouverture :" + imagecouverture    + "url: " + url)
  //     formData.append('titre', titre);
  //     formData.append('imagecouverture', imagecouverture);
  //     formData.append('url', url);
  //         return this.http.post<Itokens>(`http://localhost:8080/api/v1/video/posts/create`,formData);
  //       }

  // ajouterBout(nom:any, description :any, adresse: any, etat:any, user_id:any,  file :any): Observable<any>{
  //   console.log("nom : " + nom + "etat :" + etat    + "description: " + description)
  //       const data:FormData = new FormData()


  //       return this.http.post<Boutiques>(`http://localhost:8080/api/boutique/ajouter/${nom}/${description}/${adresse}/${user_id}/${file}`, data)
  //     }


  //ajouter un jaime 

  like(postId: number): Observable<any> {

    let data = new FormData();


    return this.http.post<any>(`http://localhost:8080/api/video/posts/${postId}/like`, data)
  }
  unlike(postId: number): Observable<any> {
    let data = new FormData();
    return this.http.post<any>(`http://localhost:8080/api/video/posts/${postId}/unlike`, data)
  }

  //Nombre totals de boutique

  // nombreBoutique(id : number):Observable<any>{
  //   return this.http.get(`${this.url}/${id}`)
  // }

  //la partie modification d'une boutique

  // modifierBoutique(id:number, nom:any, description :any, adresse: any,  user_id:any,  file :any): Observable<any>{
  //   console.log("nom : " + nom +     + "description: " + description)
  //       const data = new FormData()
  //       //data.append('id', id);
  //       data.append('nom', nom );
  //       data.append('description', description );
  //       data.append('adresse', adresse );
  //       data.append('file', file );
  //       data.append('user_id', user_id );
  //       console.log(file)

  //       return this.http.put<any>(`http://localhost:8080/api/boutique/modifier/${id}`, data)
  //     }

  //Suppression

  // suprimerBoutique(id: any): Observable<any> {
  //   return this.http.delete(`http://localhost:8080/api/boutique/supprimer/${id}`);
  // }

  //Affichage par ID

  // AfficheBoutiqueParId(id: number):Observable<any>{
  //   return this.http.get(`http://localhost:8080/api/boutique/modifier/${id}`)
  // }


  likeListe(postId: number): Observable<any> {
    return this.http.get(`http://localhost:8080/api/v1/video/posts/${postId}/likes`)
  }
  //Changer l'etat boutique

  ajouterCommentaireVideo(postId: number, contenue: any, user_id: any): Observable<any> {
    console.log("contenue : " + contenue + "user_id: " + user_id)
    const data = new FormData()
    data.append('contenue', contenue);
    data.append('user_id', user_id);
    console.log(contenue)

    return this.http.post<any>(`http://localhost:8080/api/v1/video/posts/${postId}/comments`, data)
  }
  LikeComment(commentId: number): Observable<any> {
    let data = new FormData();
    return this.http.post<any>(`http://localhost:8080/api/v1/video/posts/comments/${commentId}/like`, data)
  }

  unLikeComment(commentId: number): Observable<any> {
    let data = new FormData();
    return this.http.post<any>(`http://localhost:8080/api/v1/video/posts/comments/${commentId}/unlike`, data)
  }


  LikeVideo(postId: number): Observable<any> {
    let data = new FormData();
    return this.http.post(`http://localhost:8080/api/v1/video/posts/${postId}/like`, data,{ responseType: 'text' })
  }

  unLikeVideo(postId: number): Observable<any> {
    let data = new FormData();
    return this.http.post(`http://localhost:8080/api/v1/video/posts/${postId}/unlike`, data,{ responseType: 'text' })
  }

  commenter(postId: number): Observable<any> {
    let data = new FormData();
    return this.http.post(`http://localhost:8080/api/v1/video/posts/7/comments`,data,{ responseType: 'text' })}
  getbyid(id: number): Observable<any> {
    return this.http.get(`http://localhost:8080/api/v1/video/posts/${id}`)
  }
  AfficherParUser(userId: number): Observable<any> {
    return this.http.get(`http://localhost:8080/api/v1/video/videoParUser/1`)
  }
  AfficherCommentaireParVideo(id: number): Observable<any> {
    return this.http.get(`http://localhost:8080/api/v1/video/posts/${id}`)
  }
  VerifierPostLikeByUser(idPost: number, idUser: number): Observable<boolean> {
    return this.http.post<boolean>(`http://localhost:8080/api/v1/video/posts/${idPost}/${idUser}`,null)
  }
}