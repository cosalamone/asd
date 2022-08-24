import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpAddPlaylistComponent } from './pop-up-add-playlist.component';

describe('PopUpAddPlaylistComponent', () => {
  let component: PopUpAddPlaylistComponent;
  let fixture: ComponentFixture<PopUpAddPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpAddPlaylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpAddPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
