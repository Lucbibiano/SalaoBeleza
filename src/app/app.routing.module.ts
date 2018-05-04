<<<<<<< HEAD


=======
>>>>>>> 0197d445a3173e90e6f349dace00dd31a87dab2a
import { SobreComponent } from "./sobre/sobre.component";
import { ServicosComponent } from "./servicos/servicos.component";
import { HomeComponent } from "./home/home.component";
import { AgendarComponent } from "./agendar/agendar.component";
import { ProfissionaisComponent } from "./profissionais/profissionais.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ServicoComponent } from "./servicos/servico/servico.component";
<<<<<<< HEAD
=======
import { GerarImagensComponent } from "./gerar-imagens/gerar-imagens.component";
>>>>>>> 0197d445a3173e90e6f349dace00dd31a87dab2a


const routing: Routes = [
 
    { path:'', component: HomeComponent,

     },
    { path:'sobre', component: SobreComponent,

     },
    { path:'servicos', component: ServicosComponent,
       
     },
     { path:'servico/:id', component: ServicoComponent, 

<<<<<<< HEAD
            
=======
>>>>>>> 0197d445a3173e90e6f349dace00dd31a87dab2a
    },
    { path:'home', component: HomeComponent,
    
    },
<<<<<<< HEAD
=======
    { path:'gerar', component: GerarImagensComponent,
    
},
>>>>>>> 0197d445a3173e90e6f349dace00dd31a87dab2a
    { path:'agendamento', component: AgendarComponent},

    { path:'profissionais', component: ProfissionaisComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routing)],
    exports: [RouterModule]
})

export class AppRoutingModule{}