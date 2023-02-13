import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfilVisiteursiteurPage } from './profil-visiteursiteur.page';

describe('ProfilVisiteursiteurPage', () => {
  let component: ProfilVisiteursiteurPage;
  let fixture: ComponentFixture<ProfilVisiteursiteurPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilVisiteursiteurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilVisiteursiteurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
