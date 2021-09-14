import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../list/list.service';
import { ChatBot } from '../models/chatbot.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  detail: ChatBot;

  constructor(
    private route: ActivatedRoute,
    private listService: ListService
  ) { }

  ngOnInit() {
    this.detail = this.listService.getByName(this.route.snapshot.paramMap.get('name'));
    console.log(this.detail);
  }

}
