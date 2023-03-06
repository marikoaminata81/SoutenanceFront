import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../model/video';

@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {
  url = 'http:localhost:8080/api/v1/video'
  
    constructor(private http : HttpClient) { }
  
    //Affficher toutes les video
  
    getAll(): Observable<any> {
      return this.http.get<Video[]>(`http://localhost:8080/api/v1/video/all`);
    }
  
   
  
      //methode permettant d'ajouter une boutique
      ajouterBoutique(titre:any, imagecouverture :any, url: any, user_id:any): Observable<any>{
        console.log("titre : " + titre  + "user_id: " + user_id)
            const data = new FormData()
            data.append('titre', titre );
            data.append('imagecouverture', imagecouverture );
            data.append('url', url );
            data.append('user_id', user_id );
            console.log(imagecouverture),
            console.log(url)
            
            return this.http.post<any>("http://localhost:8080/api/v1/video/posts/create", data)
          }
  
          // ajouterBout(nom:any, description :any, adresse: any, etat:any, user_id:any,  file :any): Observable<any>{
          //   console.log("nom : " + nom + "etat :" + etat    + "description: " + description)
          //       const data:FormData = new FormData()
              
                
          //       return this.http.post<Boutiques>(`http://localhost:8080/api/boutique/ajouter/${nom}/${description}/${adresse}/${user_id}/${file}`, data)
          //     }
  
  
          //ajouter un jaime 
  
          like( postId:number):Observable<any>{
  
            let data = new FormData();
            
  
            return this.http.post<any>(`http://localhost:8080/api/video/posts/${postId}/like`, data)
          }
          unlike( postId:number):Observable<any>{
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
  
  
  likeListe( postId:number):Observable<any>{
    return this.http.get(`http://localhost:8080/api/v1/video/posts/${postId}/likes`)
  }
  //Changer l'etat boutique
  
  ajouterCommentaireVideo(postId:number,  contenue: any, user_id:any): Observable<any>{
    console.log("contenue : " + contenue  + "user_id: " + user_id)
        const data = new FormData()
        data.append('contenue', contenue );
        data.append('user_id', user_id );
        console.log(contenue)
        
        return this.http.post<any>(`http://localhost:8080/api/v1/video/posts/${postId}/comments`, data)
      }
      LikeVideo( commentId:number):Observable<any>{
        let data = new FormData();
        return this.http.post<any>(`http://localhost:8080/api/v1/video/posts/comments/${commentId}/like`, data)
      }

      unLikeVideo( commentId:number):Observable<any>{
        let data = new FormData();
        return this.http.post<any>(`http://localhost:8080/api/v1/video/posts/comments/${commentId}/unlike`, data)
      }
  getbyid(id: number):Observable<any>{
    return this.http.get(`http://localhost:8080/api/boutique/getbyid/${id}`)
  }       
  AfficherParUser(id:number): Observable<any>{
    return this.http.get(`http://localhost:8080/api/boutique/boutiqueByUser/${id}`)
  }
  }