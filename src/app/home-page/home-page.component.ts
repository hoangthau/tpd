import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserPageService } from '../shared/user-page.service';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit { 
  currentUser: any;
  storyList: Array<any> = [
    {
      _id: '5a056f41734d1d68d42ce314',
      title: 'This is story',
      content: '<p>This is content British airline EasyJet teamed up with Wright Electric to build aircrafts powered by batteries. So far, it has built a two-seater prototype with plans of a 120-seater plane in 10 years.</p>', 
      date: 1510366896400
    },
    {
      _id: '5a056f41734d1d68d42ce314',
      title: 'This is story',
      content: '<p>This is content British airline EasyJet teamed up with Wright Electric to build aircrafts powered by batteries. So far, it has built a two-seater prototype with plans of a 120-seater plane in 10 years.</p>', 
      date: 1510366896400
    },
    {
      _id: '5a056f41734d1d68d42ce314',
      title: 'This is story',
      content: '<p>This is content British airline EasyJet teamed up with Wright Electric to build aircrafts powered by batteries. So far, it has built a two-seater prototype with plans of a 120-seater plane in 10 years.</p>', 
      date: 1510366896400
    }
  ];

  constructor(
    private userPageService: UserPageService, 
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
    this.currentUser = this.loginService.getCurrentUser();
    this.getStoryList();
  }

  getStoryList() {
    this.userPageService.getAllStoryList().subscribe((data) => {
      this.storyList = data.map((d) => {
        const date = new Date(d.date);
        const content = d.content || '';
        d.dateDisplay = date.toLocaleDateString();
        d.content = content.substring(0, 100) + '...';
        d.userImg = this.loginService.getUserImage(d.email);
        return d;
      });
    });
  }

  viewStory(story: any) {
    const link = '/view-story/' + story.title.toLowerCase().replace(/\s/g, '-') + '@' + story._id;
    this.router.navigate([link]);
  }  

}
