import {Component, OnInit} from '@angular/core';
import {DictionaryService} from "./dictionary.service";
import {Definition, Information} from "../objects/information";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Word} from "../objects/word";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-dict';

  inf: Information[] = []

  wordForm = new FormGroup({
    value: new FormControl("example", [Validators.required])
  })

  constructor(public dictionary: DictionaryService) {
  }

  ngOnInit(): void {

  }

  search(word: string): void{
    this.dictionary.getWordInformation(word).subscribe(res => {
      res.forEach(r => this.inf.push(r))
      console.log(res)
      console.log(this.inf[0])
    });
  }


  getWord() {
    let word: Word =  this.wordForm.value as Word;

  }
}
