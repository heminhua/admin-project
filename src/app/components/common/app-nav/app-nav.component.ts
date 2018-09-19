import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent implements OnInit {

  selectsubMeun: any;
  isClosed: boolean = false;
  menus: any = [
    {
      FontIcon: 'fa fa-university',
      Title: '首页',
      closed: true,
      SubMenus: [
        { Command: 'home',Title:'内容' },
      ]
    },
    {
      FontIcon: 'fa fa-hand-o-right',
      Title: '订单',
      closed: true,
      SubMenus: [
        { Command: 'order',Title:'订单' },
      ]
    },
  ]
  constructor(

  ) { }

  ngOnInit(): void {
  
    this.setPad();
  }

  setPad() {
    if (navigator.userAgent.indexOf('Opera') < 0) {
      $("#session-sidebar-for-scroll>ul").css({ "padding": "0 0 41px 0" });
    }
  }

  onSelect(menu: any) {
    this.menus = this.menus.map((item:any)=>{
      if(item==menu){
        item.closed = !item.closed;
      }else{
        item.closed = true;
      }
      return item;
    });
  }



  closeAndOpen() {
    var navi = $("#main-sidebar");
    var content = $("#content-wrapper");
    var minContent = $(".content").eq(0);
    var teamworkfix = $(".teamwrokfixed").eq(0);
    //为了工程管理桌面使用的一个逻辑
    var desk = $("#desk-project-test");
    if (!this.isClosed) {
      navi.addClass("close-transform");
      content.addClass("nopadding");
      teamworkfix.addClass("teamwork-padding-left");
      desk.css({ left: "0px", "padding": "0px 0px 0px 0px" });
    } else {
      navi.removeClass("close-transform");
      content.removeClass("nopadding");
      teamworkfix.removeClass("teamwork-padding-left");
      desk.css({ left: "200px", "padding": "0px 200px 0px 0px" });
    }
    this.isClosed = !this.isClosed;
  }
  selectChild(item: any) {
    if (this.selectsubMeun == item) {
      return;
    }
    this.selectsubMeun = item;
  }
}


