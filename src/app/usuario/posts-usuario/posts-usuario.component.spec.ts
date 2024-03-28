import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsUsuarioComponent } from './posts-usuario.component';

describe('PostsUsuarioComponent', () => {
  let component: PostsUsuarioComponent;
  let fixture: ComponentFixture<PostsUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsUsuarioComponent]
    });
    fixture = TestBed.createComponent(PostsUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
