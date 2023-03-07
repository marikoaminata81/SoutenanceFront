import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../model/Categorie';
import { Video } from '../model/video';

@Injectable({
  providedIn: 'root'
})
export class CategorieServiceService {

  url = 'http://localhost:8080/api/v1/categorie/'

  constructor(private http : HttpClient) { }
  
    //Affficher toutes les video
  
    getAll(): Observable<any> {
      return this.http.get<Categorie[]>(`http://localhost:8080/api/v1/categorie/all`);
    }
  
   
  
      //methode permettant d'ajouter une video
      ajouterCategorei(nom:any, imagecouverture :any): Observable<any>{
        console.log("nom : " + nom + "imagecouverture: " + imagecouverture )
            const data = new FormData()
            data.append('nom', nom );
            data.append('imagecouverture', imagecouverture );
            
           
            console.log("categorie créer")
            
            return this.http.post<any>("http://localhost:8080/api/v1/categorie/create", data)
          }

}
