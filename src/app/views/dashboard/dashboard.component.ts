import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

    items = [
    
      {
        name: "Profile", route: "/admin/profile", icon:"person"
      },
      {
        name: "Offers", route: "/admin/offers", icon:"search"
      },
      {
        name: "My offers", route: "/admin/offers/my-offers", icon:"work"
      },
      {
        name: "Settings", route: "/admin/config", icon:"settings"
      },
      {
        name: "Logout", route: "/", icon:"exit_to_app"
      },
    ]
}

