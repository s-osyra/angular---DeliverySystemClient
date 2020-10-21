import { Component, OnInit } from '@angular/core';
import { Package } from '../../../model/package-model';
import { PackageService } from '../../../services/package.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent implements OnInit {
  map = new Map <string, string>();
  data;
  constructor( 
    private packageServie: PackageService ) {  } 
  ngOnInit(): void {
  } 
  clearMap() {
    this.map.clear();
    this.data = [];
  }
  onPackageGet(v: NgForm) {
    const id = v.form.value.id;
      this.packageServie.sendGetRequest(id).subscribe((data: Package) => {
        this.map.clear(); 
          for (var value in data) {  
            this.map.set(value,data[value])  
            } 
      },
      error => {
        this.map.clear();
        this.map.set('ERROR', "Invalid package ID.")
      })
  }
  onPackageDelete(v: NgForm) {
    const id = v.form.value.id;
    console.log(id)
      this.packageServie.sendDeleteRequest(id).subscribe((data: Package) => {
        this.map.clear(); 
        this.map.set('SUCCESS!', "Pack created!")
      },
      error => {
        this.map.clear();
        this.map.set('ERROR', "Invalid package ID.")
      })
  }
  onPackageAdd(v: NgForm){
    let pack: Package = new Package();
    pack.dimensions = v.form.value.dimensions;
    pack.currentLocalization = v.form.value.currentlocalization;
    pack.mass = v.form.value.mass;
    pack.internationalShipping = v.form.value.internationalshipping;
    pack.shipDate = v.form.value.shipdate;
    this.packageServie.sendPostRequest(pack).subscribe((data: Package) => {
      this.map.clear(); 
      this.map.set('SUCCESS!', "Pack created!")
    },
    error => {
      this.map.clear();
      this.map.set('ERROR', "Invalid server error.")
    })
  }
  onPackageUpdate(v: NgForm){
    let pack: Package = new Package();
    v.form.value.id ? pack.id = v.form.value.id : pack.id = undefined;
    v.form.value.dimensions ? pack.dimensions = v.form.value.dimensions : pack.dimensions = undefined;
    v.form.value.currentlocalization ?  pack.currentLocalization = v.form.value.currentlocalization : pack.currentLocalization = undefined;
    v.form.value.mass ? pack.mass = v.form.value.mass : pack.mass = undefined;
    v.form.value.internationalshipping ?  pack.internationalShipping = v.form.value.internationalshipping : pack.internationalShipping = undefined;
    v.form.value.shipdate ? pack.shipDate = v.form.value.shipdate : pack.shipDate = undefined;
    this.packageServie.sendUpdateRequest(pack.id, pack).subscribe((data: Package) => {
      this.map.clear(); 
      this.map.set('SUCCESS!', "Pack created!")
    },
    error => {
      this.map.clear();
      this.map.set('ERROR', "Invalid server error.")
    })
  }


  OnPackReturnAll (){
    this.packageServie.sendGetAllRequest().subscribe((data: Package) => {
      this.map.clear(); 
          this.data = data;
          console.log(data)
    },
    error => {
      this.map.clear();
      this.map.set('ERROR', "Invalid package ID.")
    })
}

}
