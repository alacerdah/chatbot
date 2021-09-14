import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { ChatBot } from '../models/chatbot.model';
import { ListService } from './list.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  isList: boolean;
  isCard: boolean;
  star: boolean;
  listChatBot: ChatBot[];
  order: string = '';
  filterName = '';

  constructor(
    private listService: ListService,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    this.listChatBot = this.listService.getItems();
    this.isList = true;
    this.star = false;
  }

  lists(){
    this.isList = true;
    this.isCard = false;
  }

  cards(){
    this.isList = false;
    this.isCard = true;
  }

  orderBy(x) {
    this.order = x;
  }

  openProfile(name: string){
    this.router.navigate(['/profile/' + name])
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.listChatBot = this.listService.getItems();
    });
  }
}
