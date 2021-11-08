import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {  NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private modalService: NgbModal) {}
  closeResult = '';
  logincontent:boolean = true;
  title = 'areooo-front-end';
  userUnAuthenticated:boolean = true;
  displaySidenav:boolean = false;
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    this.logincontent=true;
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  signUp(){
    this.logincontent=!this.logincontent;
    console.log(this.logincontent);
  }

  login(loginForm:NgForm){
   if(loginForm.value.username =="venkatesh" && loginForm.value.pwd == "123"){
    this.userUnAuthenticated=!this.userUnAuthenticated;
     console.log("login success")
     this.modalService.dismissAll("closed after login")
   } else {
    console.log("login fail")
   }
  }

  openNav(){
    // const main = document.getElementById("main");
    // if (main) { main.style.marginLeft = "20%";}
    const navbar  = document.getElementById("mySidenav");
    if (navbar) {navbar.style.width = "20%";}
    console.log("opening side navbar")
  }

  closeSideNav(){
    // const main = document.getElementById("main");
    // if (main) { main.style.marginLeft = "0%";}
    const navbar  = document.getElementById("mySidenav");
    if (navbar) {navbar.style.width = "0%";}
    console.log("closing side navbar")
  }
}
