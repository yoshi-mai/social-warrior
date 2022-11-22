import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { SettingsComponent } from './components/settings/settings.component'

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