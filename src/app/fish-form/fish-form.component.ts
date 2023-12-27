import { Component } from '@angular/core';

import { Fish } from '../fish';

@Component({
  selector: 'app-fish-form',
  templateUrl: './fish-form.component.html',
  styleUrls: ['./fish-form.component.css']
})
export class FishFormComponent {

  rods = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  baits = ['Really Smart2', 'Super Flexible2',
            'Super Hot2', 'Weather Changer2'];

  model = new Fish(18, 'Dr. IQ', this.rods[0], this.baits[0],100);

  submitted = false;

  onSubmit() { this.submitted = true; }


  newFish() {
    this.model = new Fish(42, '', '','',100);
  }

  skyDog(): Fish {
    const myFish =  new Fish(42, 'SkyDog',
                           'Fetch any object at any distance',
                           'Leslie Rollover',
                           100);
    console.log('My fish is called ' + myFish.name); // "My fish is called SkyDog"
    return myFish;
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(fishForm)}}
  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value; // Dr. IQ
  }

  /////////////////////////////

}
