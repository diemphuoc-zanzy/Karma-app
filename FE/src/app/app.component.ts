import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslationService } from './modules/i18n';

import { locale as enLang } from './modules/i18n/vocabs/en';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(public transLateService: TranslationService) {
    //register translations
    this.transLateService.loadTranslations(
      enLang,
    )
  }

  ngOnInit(): void {}
}
