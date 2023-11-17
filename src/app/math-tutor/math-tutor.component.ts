import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {OpenaiService} from "../service/openai/openai.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-math-tutor',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './math-tutor.component.html',
  styleUrl: './math-tutor.component.scss'
})
export class MathTutorComponent implements OnInit{
  constructor(private openaiService: OpenaiService){}

  ngOnInit(){
    console.log('im here')
    this.callAssistant();
  }

  callAssistant(){
    const requestData = {
      // your data here
    };

    this.openaiService.getOpenaiData(requestData).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
