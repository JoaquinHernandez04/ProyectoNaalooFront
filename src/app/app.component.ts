import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
    standalone: true, // Indicar que este componente es independiente (standalone)
    template: `<router-outlet></router-outlet>`,
    imports: [RouterModule] // Importa lo necesario como parte del standalone
})
export class AppComponent { }
