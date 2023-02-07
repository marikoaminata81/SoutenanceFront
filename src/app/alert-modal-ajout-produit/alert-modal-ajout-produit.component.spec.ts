import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlertModalAjoutProduitComponent } from './alert-modal-ajout-produit.component';

describe('AlertModalAjoutProduitComponent', () => {
  let component: AlertModalAjoutProduitComponent;
  let fixture: ComponentFixture<AlertModalAjoutProduitComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertModalAjoutProduitComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertModalAjoutProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
