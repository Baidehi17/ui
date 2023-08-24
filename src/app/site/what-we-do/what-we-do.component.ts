import { Component } from '@angular/core';
import { WhatWeDo } from 'src/app/Model/what-we-do';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss']
})
export class WhatWeDoComponent {

  whatWeDo: WhatWeDo[] = [
    {
      icon: "assets/images/images.png",
      title: "Cloud Transformation",
      para: "Cloud adoption results in better speed.We help you with all cloud migration scenarios and building cloud-based applications."
    },
    {
      icon: "assets/images/artifical.jpeg",
      title: "Artificial Intelligence",
      para: "Leverage the most advanced technology use cases in solving your business-critical problems. Go beyond with AI powered solutions."
    },
    {
      icon: "assets/images/PE.jpg",
      title: "Product Engineering",
      para: "We help you with every aspect under full-cycle product engineering with ease, ensuring that your ideas are well-executed."
    },
    {
      icon: "assets/images/DA.png",
      title: "Data Analytics",
      para: "Empower your business growth with data-driven insights. Confident decision-making comes with the right analytics."
    },
    {
      icon: "assets/images/ED.jpeg",
      title: "Experience Design",
      para: "The experiences you deliver is a game changer. Transform your end-to-end user experiences to be valued player."
    },
    {
      icon: "assets/images/DT.jpeg",
      title: "Digital Transformation",
      para: "Digital technology is a growth catalyst. Identify potential areas for growth, prepare a new opportunities."
    },
    
  ];
}
