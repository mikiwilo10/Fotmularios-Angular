import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/model/IMenu';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [],
})
export class SideMenuComponent implements OnInit {
  public reactiveMenu: Menu[] = [
    { title: 'Basicos', route: './reactive/basic' },
    { title: 'Dinamicos', route: './reactive/dynamic' },
    { title: 'Switches', route: './reactive/switch' },
    { title: 'Zorro', route: './reactive/zorro' },
  ];

  public authMenu: Menu[] = [{ title: 'Registro', route: './auth' }];

  constructor() {}

  ngOnInit(): void {}
}
