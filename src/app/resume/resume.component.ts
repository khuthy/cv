import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  title = 'Muenda Khuthadzo';
  role = 'Software Developer @CodeTribe Soweto Empowerment Zone.';
  history = 'A Sofware developer from CodeTribe Soweto Empowerment Zone. Graduated at the University of Venda specialised in BSC Computer Sciences and Information System. Voluteered to be an IT Tutor at the University of Venda.';
  email = 'muendakhuthadzo@gmail.com';
  location = 'South Africa, Soweto';
  linkedIn = 'https://www.linkedin.com/in/khuthi-muenda-024358120/';
  phone = '+2776 647 6482';
  id = '960917 5813 087';
  gender = 'Male';
  
  
  constructor() { 
    
  }

  ngOnInit() {
    
  }

}

