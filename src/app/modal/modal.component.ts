import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ListService } from '../list/list.service';
import { ModalAlertComponent } from '../modal-alert/modal-alert.component';
import { ChatBot } from '../models/chatbot.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {
  chatForm: FormGroup;
  chatBot: ChatBot;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    public dialog: MatDialog,
    private listService: ListService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.chatForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      shortName: this.fb.control('', [Validators.required]),
      description: this.fb.control('', [Validators.required]),
      image: this.fb.control('', [Validators.required]),
      created: this.fb.control(new Date()),
      culture: this.fb.control('pt-BR'),
      plan: this.fb.control('', [Validators.required]),
      template: this.fb.control('', [Validators.required])
    })
  }

  onClick(): void {
    this.chatBot = new ChatBot();
    const data = this.chatForm.getRawValue()
    this.chatBot.created = data.created.toString();
    this.chatBot.culture = data.culture;
    this.chatBot.description = data.description;
    this.chatBot.image = data.image;
    this.chatBot.name = data.name;
    this.chatBot.plan = data.plan;
    this.chatBot.shortName = data.shortName;
    this.chatBot.template = data.template;
    const result = this.listService.addItem(this.chatBot);
    this.openDialogAlert(result);
    this.dialogRef.close();
  }

  openDialogAlert(message) {
    const dialogRef = this.dialog.open(ModalAlertComponent, {
      width: '250px',
      data: message
    });
  }

  onChange(event) {
    this.chatForm.controls['file'].setValue(event.target.files[0].name);
  }

  onSubmit() {
      return this.chatForm.getRawValue();
  }
}
