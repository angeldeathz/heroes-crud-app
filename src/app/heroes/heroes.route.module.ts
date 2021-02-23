import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroeComponent } from './pages/heroe/heroe.component';

const routes: Routes = [
    {
        path: "",
        children: [
            {
                path: "list",
                component: ListComponent
            },
            {
                path: "add",
                component: AddComponent
            },
            {
                path: "edit/:id"
            },
            {
                path: "search",
                component: SearchComponent
            },
            {
                path: ":id",
                component: HeroeComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class HeroesRoutesModule { }