import { Component, HostListener, Renderer2 } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  sidebarVisible: boolean = false;
  items: MenuItem[] | undefined;
  screenWidth!: number;
  isHeaderScrolled = false;
  logoSrc = 'assets/images/technovert_logo_white (1).svg';

  constructor() {
    this.screenWidth = window.innerWidth;
    this.checkScreenWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.screenWidth = window.innerWidth;
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    // if (this.screenWidth >= 768) {
    //   this.sidebarVisible = false;
    // }
  }

  openSidebar() {
    if (this.screenWidth >= 768 ||this.screenWidth >= 425 ||this.screenWidth >= 375 || this.screenWidth >= 320) {
      this.sidebarVisible = !this.sidebarVisible;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isHeaderScrolled = window.pageYOffset > 0;
    this.logoSrc = this.isHeaderScrolled ? 'assets/images/technovert_logo_blue.svg':'assets/images/technovert_logo_white (1).svg';
  }

 
  ngOnInit() {
    this.items = [
      
      {
        label: 'Service',
        items: [
          {
            label: 'New',
            icon: '',
            items: [
              {
                label: 'Bookmark',
                icon: 'pi pi-fw pi-bookmark'
              },
              {
                label: 'Video',
                icon: 'pi pi-fw pi-video'
              }
            ]
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash'
          },
          {
            separator: true
          },
          {
            label: 'Export',
            icon: 'pi pi-fw pi-external-link'
          }
        ]
      },
      {
        label: 'Solution',
        icon: '',
        items: [
          {
            label: 'Left',
            icon: 'pi pi-fw pi-align-left'
          },
          {
            label: 'Right',
            icon: 'pi pi-fw pi-align-right'
          },
          {
            label: 'Center',
            icon: 'pi pi-fw pi-align-center'
          },
          {
            label: 'Justify',
            icon: 'pi pi-fw pi-align-justify'
          }
        ]
      },
      {
        label: 'Labs',
        icon: '',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus'
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus'
          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Print',
                    icon: 'pi pi-fw pi-print'
                  }
                ]
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'List'
              }
            ]
          }
        ]
      },
      {
        label: 'Insights',
        icon: '',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus'
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus'
              }
            ]
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus'
              }
            ]
          }
        ]
      },
      {
        label: 'About',
        icon: ''
      }
    ];
  }
}
