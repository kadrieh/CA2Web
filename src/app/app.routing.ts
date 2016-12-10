import { HomeComponent } from './home/home.component';
import { PageAComponent } from './page-a/page-a.component';
import { PageBComponent } from './page-b/page-b.component';
 
export const AppRoutes: any = [
    { path: "home", component: HomeComponent },
    { path: "page-a", component: PageAComponent },
    { path: "page-b", component: PageBComponent }
];
 
export const AppComponents: any = [
    HomeComponent,
    PageAComponent,
    PageBComponent
];