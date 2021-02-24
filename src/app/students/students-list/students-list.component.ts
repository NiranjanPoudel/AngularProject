import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from 'src/app/shared/student.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StudentComponent } from '../student/student.component';
import { NotificationService } from '../../shared/notification.service';
import { DialogService } from 'src/app/shared/dialog.service';



@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  constructor(private service: StudentService, private dialog: MatDialog,
    private notification: NotificationService,
    private dialogService: DialogService,
  ) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['fullName', 'email', 'mobile', 'address', 'faculty', 'action'];
  @ViewChild(MatSort) sort: MatSort;
  searchKey: string;

  ngOnInit(): void {
    this.service.getStudents().subscribe(
      list => {
        let array = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;

      }
    );
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(StudentComponent, dialogConfig);
  }
  onEdit(row) {
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(StudentComponent, dialogConfig);
  }
  onDelete($key) {
    this.dialogService.openConfirmDialog()
      .afterClosed().subscribe(res => {
        if (res) {
          this.service.deleteStudent($key);
          this.notification.warn('! Deleted successfully');
        }
      });

  }






}
