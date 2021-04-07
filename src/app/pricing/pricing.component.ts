import { Component, OnInit } from '@angular/core';
import Plans, {PricingPlan} from './pricing-plan.interface'

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent implements OnInit {

  pricingPlans: PricingPlan[];

  constructor() { }

  ngOnInit() {
    this.pricingPlans = Plans
  }

}
