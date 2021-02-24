import { GalleryService } from './_service/gallery.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galleryList;
  p: number = 1;
  collection: any = [];
  constructor(
    private apiService: GalleryService
  ) { }

  ngOnInit(): void {
    this.loadImageList();
  }

  loadImageList(query?) {
    this.apiService.getAllImages(query).subscribe(res => {
      this.galleryList = res;
    });
  }

  getPage(evt) {
    console.log(evt)
  }

  websiteList: any = [{ page: 10 }, { page: 20 }, { page: 30 }, { page: 50 }, { page: 100 }, { page: 150 },]

  form = new FormGroup({
    website: new FormControl('', Validators.required)
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
  }

  changeWebsite(e) {
    console.log(e.target.value);
    this.loadImageList(e.target.value);
  }


}
