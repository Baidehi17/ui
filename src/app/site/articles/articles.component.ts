import { Component } from '@angular/core';
import { Article } from 'src/app/Model/Article';
import { WhatWeDo } from 'src/app/Model/what-we-do';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  articles: Article[] = [
    {
      backgroundImage: "none",
      title: "Cloud Transformation",
      subTile: "Article",
      background: "#ffff",
      para: "Cloud adoption results in better insights, collaboration and speed. &nbsp; We help you with all cloud migration scenarios and building cloud-based applications."
    },
    {
      backgroundImage: "none",
      title: "Cloud Transformation",
      subTile: "Article",
      background: "#ffff",
      para: "Cloud adoption results in better insights, collaboration and speed. &nbsp; We help you with all cloud migration scenarios and building cloud-based applications."
    },
    {
      backgroundImage: "none",
      title: "Cloud Transformation",
      subTile: "Article",
      background: "#ffff",
      para: "Cloud adoption results in better insights, collaboration and speed. &nbsp; We help you with all cloud migration scenarios and building cloud-based applications."
    },
    {
      backgroundImage: "none",
      title: "Cloud Transformation",
      subTile: "Article",
      background: "#ffff",
      para: "Cloud adoption results in better insights, collaboration and speed. &nbsp; We help you with all cloud migration scenarios and building cloud-based applications."
    },
    {
      backgroundImage: "none",
      title: "Cloud Transformation",
      subTile: "Article",
      background: "#ffff",
      para: "Cloud adoption results in better insights, collaboration and speed. &nbsp; We help you with all cloud migration scenarios and building cloud-based applications."
    },
    {
      backgroundImage: "none",
      title: "Cloud Transformation",
      subTile: "Article",
      background: "#ffff",
      para: "Cloud adoption results in better insights, collaboration and speed. &nbsp; We help you with all cloud migration scenarios and building cloud-based applications."
    },

  ];
}
