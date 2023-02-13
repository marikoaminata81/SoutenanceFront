import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: 'tab5',
        loadChildren: () => import('../tab5/tab5.module').then(m => m.Tab5PageModule)
      },
      
     
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      },
      
  
  // {
  //   path: 'recherche',
  //   loadChildren: () => import('./recherche/recherche.module').then( m => m.RecherchePageModule)
  // },
  // {
  //   path: 'commentaire',
  //   loadChildren: () => import('./commentaire/commentaire.module').then( m => m.CommentairePageModule)
  // },
 
  //ng g component nomducomponent
  
  {
    path: 'produits',
    loadChildren: () => import('../produits/produits.module').then( m => m.ProduitsPageModule)
  },
  {
    path: 'details-produits',
    loadChildren: () => import('../details-produits/details-produits.module').then( m => m.DetailsProduitsPageModule)
  },
 
  {
    path: 'detail-commande',
    loadChildren: () => import('../detail-commande/detail-commande.module').then( m => m.DetailCommandePageModule)
  },
  // {
  //   path: 'panier',
  //   loadChildren: () => import('./panier/panier.module').then( m => m.PanierPageModule)
  // },
  {
    path: 'liste-categorie',
    loadChildren: () => import('../liste-categorie/liste-categorie.module').then( m => m.ListeCategoriePageModule)
  },
  {
    path: 'login1',
    loadChildren: () => import('../login1/login1.module').then( m => m.Login1PageModule)
  },
  {
    path: 'ajouter-produit',
    loadChildren: () => import('../ajouter-produit/ajouter-produit.module').then( m => m.AjouterProduitPageModule)
  },
  {
    path: 'payement',
    loadChildren: () => import('../payement/payement.module').then( m => m.PayementPageModule)
  },
  {
    path: 'confirmation',
    loadChildren: () => import('../confirmation/confirmation.module').then( m => m.ConfirmationPageModule)
  },
  {
    path: 'ajouter-plats',
    loadChildren: () => import('../ajouter-plats/ajouter-plats.module').then( m => m.AjouterPlatsPageModule)
  },
  {
    path: 'ajouter-video',
    loadChildren: () => import('../ajouter-video/ajouter-video.module').then( m => m.AjouterVideoPageModule)
  },
  {
    path: 'profil-visiteursiteur',
    loadChildren: () => import('../profil-visiteursiteur/profil-visiteursiteur.module').then( m => m.ProfilVisiteursiteurPageModule)
  },
  {
    path: 'panier-page',
    loadChildren: () => import('../panier-page/panier-page.module').then( m => m.PanierPagePageModule)
  },
  {
    path: 'recherche-page',
    loadChildren: () => import('../recherche-page/recherche-page.module').then( m => m.RecherchePagePageModule)
  },
  {
    path: 'liste-commande-page',
    loadChildren: () => import('../liste-commande-page/liste-commande-page.module').then( m => m.ListeCommandePagePageModule)
  },
  {
    path: 'liste-abonnes',
    loadChildren: () => import('../liste-abonnes/liste-abonnes.module').then( m => m.ListeAbonnesPageModule)
  },
  {
    path: 'commentaires',
    loadChildren: () => import('../commentaires/commentaires.module').then( m => m.CommentairesPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('../settings/settings.module').then( m => m.SettingsPageModule)
  },

    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
