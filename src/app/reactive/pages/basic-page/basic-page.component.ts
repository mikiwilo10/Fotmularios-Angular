import { Component, OnInit } from '@angular/core';
import { format, addDays } from 'date-fns';
import { es } from 'date-fns/locale';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styles: [],
})
export class BasicPageComponent implements OnInit {
  fechaSeleccionada: string = '';
  currentDate = new Date();

  formattedDate: any = format(this.currentDate, 'dd/MM/yyyy HH:mm:ss', {
    locale: es,
  });
  constructor() {}

  ngOnInit(): void {}
}
