import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../shared/student.service';
import { NotificationService } from '../../shared/notification.service';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(public service:StudentService , public notification:NotificationService, public dialogRef: MatDialogRef<StudentComponent>) { }

  ngOnInit(): void {
     this.service.getStudents();
  }
 
 faculties=[
{id:1, value:'Management'},
{id:2, value:'Science'},
{id:3, value:'Humanity'}
 ]

onClear(){
  this.service.form.reset();
  this.service.initializeFormGroup();

}

onSubmit(){
  if(this.service.form.valid){
    if(!this.service.form.get('$key').value)
    this.service.insertStudent(this.service.form.value);
    else
    this.service.updateStudent(this.service.form.value);

    this.service.form.reset();
    this.service.initializeFormGroup();
    this.notification.success('::Submitted Successfully'); 
    this.onClose();

  }
}
onClose(){
  this.service.form.reset();
  this.service.initializeFormGroup();
  this.dialogRef.close();
}

}
