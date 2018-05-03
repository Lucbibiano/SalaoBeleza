

import { SobreComponent } from "./sobre/sobre.component";
import { ServicosComponent } from "./servicos/servicos.component";
import { HomeComponent } from "./home/home.component";
import { AgendarComponent } from "./agendar/agendar.component";
import { ProfissionaisComponent } from "./profissionais/profissionais.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ServicoComponent } from "./servicos/servico/servico.component";


const routing: Routes = [
 
    { path:'', component: HomeComponent,

     },
    { path:'sobre', component: SobreComponent,

     },
    { path:'servicos', component: ServicosComponent,
       
     },
     { path:'servico/:id', component: ServicoComponent, 

            
    },
    { path:'home', component: HomeComponent,
    
    },
    { path:'agendamento', component: AgendarComponent},

    { path:'profissionais', component: ProfissionaisComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routing)],
    exports: [RouterModule]
})

export class AppRoutingModule{}