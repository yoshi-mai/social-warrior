import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { SettingsComponent } from './components/settings/settings.component'
import { OrgsComponent } from './components/orgs/orgs.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
                component: MapComponent
			},
			{
				path: 'map',
				component: MapComponent
			},
			{
				path: 'settings',
				component: SettingsComponent
			},
			{
				path: 'orgs',
				component: OrgsComponent
			},
			{
				path: '**',
				redirectTo: ''
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}