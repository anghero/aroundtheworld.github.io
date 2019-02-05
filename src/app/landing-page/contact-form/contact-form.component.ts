import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { fadeIn } from 'src/app/common/animation';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  animations: [fadeIn]
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  form: FormGroup;

  submited = false;

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    });
  }
  onSubmitForm() {
    if (this.form.status === 'VALID'){
      this.submited = true;
      this.form.reset();
    }
    console.log("submit", this.form);
  }

}
