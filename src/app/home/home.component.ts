import {Component, OnInit} from '@angular/core';
import {CommandeService} from "../services/commande.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private commandeService: CommandeService) {

  }

  ngOnInit(): void {
    this.commandeService.getAll();
  }

}
