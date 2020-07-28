// Modelos y Rutas
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// Componentes
import { IndexComponent } from './componentes/index/index.component';
import { ChekInComponent } from './componentes/chek-in/chek-in.component';
import { PagoComponent } from './componentes/pago/pago.component';
import { ErrorComponent } from './componentes/error/error.component';

// Definiendo rutas
const routes: Routes = [
	{path : "", component: IndexComponent },
	{path : "inicio", component: IndexComponent },
	{path : "chek-in", component: ChekInComponent },
	{path : "pago", component: PagoComponent},
	{path : "**", component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
