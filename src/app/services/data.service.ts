import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getMainNews() {
    return {
      title: "Messi marca hat-trick na vitória do Inter Miami",
      description: "Lionel Messi mostrou mais uma vez sua classe com três gols na vitória por 4-2 sobre o New York City.",
      photo: "https://example.com/messi.jpg",
      views: "1.2M"
    };
  }

  getSecondaryNews() {
    return [
      {
        title: "Brasil vence Argentina em amistoso preparatório",
        description: "Seleção brasileira vence por 2-1 com gols de Vini Jr e Neymar.",
        photo: "https://example.com/brasil-argentina.jpg",
        views: "850K"
      },
      {
        title: "Premier League anuncia novas regras para a temporada",
        description: "Mudanças incluem aumento de substituições e ajustes no VAR.",
        photo: "https://example.com/premier-league.jpg",
        views: "720K"
      }
    ];
  }
}