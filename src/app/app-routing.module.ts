import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  
  // {
  //   path: '',
  //   loadChildren: () => import('./mainscreen/mainscreen.module').then( m => m.MainscreenPageModule)
  // },
  
  
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
  },
  {
    path: 'recherche',
    loadChildren: () => import('./recherche/recherche.module').then( m => m.RecherchePageModule)
  },
  {
    path: 'commentaire',
    loadChildren: () => import('./commentaire/commentaire.module').then( m => m.CommentairePageModule)
  },
  {
    path: 'page-oups',
    loadChildren: () => import('./page-oups/page-oups.module').then( m => m.PageOupsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  //ng g component nomducomponent
  {
    path: 'fogotpassword',
    loadChildren: () => import('./fogotpassword/fogotpassword.module').then( m => m.FogotpasswordPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'mainscreen',
    loadChildren: () => import('./mainscreen/mainscreen.module').then( m => m.MainscreenPageModule)
  },
  {
    path: 'details-produits',
    loadChildren: () => import('./details-produits/details-produits.module').then( m => m.DetailsProduitsPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'detail-commande',
    loadChildren: () => import('./detail-commande/detail-commande.module').then( m => m.DetailCommandePageModule)
  },
  {
    path: 'panier',
    loadChildren: () => import('./panier/panier.module').then( m => m.PanierPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./liste-commande/liste-commande.module').then( m => m.ListeCommandePageModule)
  },  {
    path: 'liste-categorie',
    loadChildren: () => import('./liste-categorie/liste-categorie.module').then( m => m.ListeCategoriePageModule)
  },
  {
    path: 'produits',
    loadChildren: () => import('./produits/produits.module').then( m => m.ProduitsPageModule)
  },



  

  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
