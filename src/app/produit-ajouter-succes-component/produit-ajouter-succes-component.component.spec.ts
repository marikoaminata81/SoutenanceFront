import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProduitAjouterSuccesComponentComponent } from './produit-ajouter-succes-component.component';

describe('ProduitAjouterSuccesComponentComponent', () => {
  let component: ProduitAjouterSuccesComponentComponent;
  let fixture: ComponentFixture<ProduitAjouterSuccesComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitAjouterSuccesComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProduitAjouterSuccesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
