import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/shared/shared.service';
import { environment } from 'src/environments/environments';
import { AnimationService } from '../../shared/services/animation.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  constructor(private api_service: ApiService,private loader: NgxUiLoaderService,private sharedService : SharedService, private animationService: AnimationService) {}
  categoryList = [
    { name: 'Linux', selected: false },
    { name: 'DevOps', selected: false },
    { name: 'Code', selected: false },
    { name: 'Docker', selected: false },
    { name: 'CMS', selected: false },
  ];

  actual_question: any;
  getQuestion() {
    this.loader.start()
    const selectCategory = this.categoryList.filter((res:any)=>res.selected)
    let category :any
    if(selectCategory.length){
      category = selectCategory[0].name
    }
    this.api_service.getQuestion(category).subscribe((res: any) => {
      this.actual_question = res[0];
      this.actual_question.answers_array = [];
      this.actual_question.answer_index = [];
      for (const key in this.actual_question.answers) {
        this.actual_question.answers_array.push(
          this.actual_question.answers[key]
        );
      }
      for (const key in this.actual_question.correct_answers) {
        this.actual_question.answer_index.push(
          this.actual_question.correct_answers[key]
        );
      }
      this.startagame = true;
      this.loader.stop()
    },(err:any)=>{
      this.loader.stop()
    });
  }
  selectCategory(category: any) {
    category.selected = !category.selected;
  }
  startagame: any = false;
  startGame() {
    this.getQuestion();
  }
  isCorrectAnswer: any;
  submitTheAnswer() {
    if (!this.isCorrectAnswer) {
      const correct_answer_index: any = [];
      const answer: any = this.actual_question.answer_index.filter(
        (res: any, index: any) => {
          if (res == 'true') {
            correct_answer_index.push(index);
          }
        }
      );
      const isCorrect = this.actual_question.user_input.every((index: any) =>
        correct_answer_index.includes(index)
      );
      if (isCorrect) {
        this.isCorrectAnswer = 'Great! You got it right!';
      } else {
        this.isCorrectAnswer = "Oops! That's not correct. Keep trying!";
      }
    } else {
      this.isCorrectAnswer = '';
      this.getQuestion();
    }
  }
  answersForThequestion(ev: any, option: any, index: any) {
    if (!Array.isArray(option?.user_input)) {
      option.user_input = [];
    }
    if (ev.target.checked) {
      option.user_input.push(index);
    } else {
      option.user_input.splice(option.user_input.indexOf(index), 1);
    }
  }
}
