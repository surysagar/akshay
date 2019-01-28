import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { FileRetriggerComponent} from './file-retrigger/file-retrigger.component';

const routes: Routes = [
{ path: '', component: TableComponent},
{ path: 'display_status', component: TableComponent },
{ path: 'file_retrigger', component: FileRetriggerComponent }
];

export const routing = RouterModule.forRoot(routes);