import { Component } from '@angular/core';
import { FooterContent } from 'src/app/Model/FooterContent';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerContent: FooterContent[] = [{
    title: 'Services',
    open:true,
    child: ['Cloud', 'Analytics', 'Data ', 'Product ', 'Digital ', ' Quality ', 'UX design']
  },
  {
    title: 'Insights',
    open:true,
    child: ['Blog', 'Papers', 'studies', 'Brochures', 'Webinar']
  },
  {
    title: 'About',
    open:true,
    child: ['About Us', 'Values', 'Quality', 'Careers', 'Contact Us']
  },
  // {
  //   title: 'Locations',
  //   open:true,
  //   child: ['6010 W Spring Creek Pkwy,', 'Plano, TX 75024', '+1 (425) 943-9412']
  // },
  // {
  //   title: ' ',
  //   open:true,
  //   child: ['Incor 9, 5th Floor, Kavuri Hills,', 'Madhapur, Telangana 500033', '+91 931-131-2323']
  // },
  // {
  //   title: ' ',
  //   child: ['600 Stewart Street, Suite 400', 'Seattle, WA 98101', '+1 (425) 943-9412'],
  //   open:true
  // },
  // {
  //   title: ' ',
  //   child: ['Level 2, Invaders Bay Tower,', 'Port of Spain, Trinidad & Tobago', '+1 (425) 943-9412'],
  //   open:true
  // }
  ];

  toggleContent(content: any) {
    content.open = !content.open;
  }
}
