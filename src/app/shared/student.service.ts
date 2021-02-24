import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  constructor(private firebase:AngularFireDatabase) {
      
    
   }  

  studentList: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('',Validators.email),
    mobile: new FormControl('',[Validators.required,Validators.minLength(10)]),
    address: new FormControl(''),
    enrollment: new FormControl(''),
    faculty: new FormControl(''),
  });
 initializeFormGroup(){
   this.form.setValue({
     $key:null,
     fullName:'',
     email:'',
     mobile:'',
     address:'',
     enrollment:'0',
     faculty:''
   });
 }

getStudents(){
    this.studentList=this.firebase.list('students');
    return this.studentList.snapshotChanges();
  }
insertStudent(student){
  this.studentList.push({
  fullName:student.fullName,
  email:student.email,
  mobile:student.mobile,
  address: student.address,
  enrollment: student.enrollment,
  faculty: student.faculty
  });
}

updateStudent(student){
  this.studentList.update(student.$key,
    {
      fullName:student.fullName,
      email:student.email,
      mobile:student.mobile,
      address: student.address,
      enrollment: student.enrollment,
      faculty: student.faculty
    });
}

deleteStudent($key: string){
  this.studentList.remove($key);
}

populateForm(student){
  this.form.setValue(student);
}

}
