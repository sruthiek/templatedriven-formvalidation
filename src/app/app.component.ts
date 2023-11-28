import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'templatedriven-formvalidation';



mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  
passwordPtn ='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$'
emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"



userData: any = {}  

onSubmit(form: any) {
  console.log('form submitted',form)
  alert('Form saved sucessfully!');
  // x.reset();
}

  
}
