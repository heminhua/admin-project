import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-project';
  slimscrollOption:any;
  constructor(

  ) {
  }
  ngOnInit() {
    this.contentWrapperHeight();
  }
  contentWrapperHeight() {
    var _this = this;
    _this.windowResize();
    $(window).resize(function () {
      _this.windowResize();
    });
  }
  windowResize() {
    var windowHeight = $(window).height();
    var contentWrapperHeight = windowHeight - 49;
    //设置content-wapper 高度
    $(".content-wrapper").css("min-height", contentWrapperHeight + 14);
    //设置footer的bottom
    if ($(window).width() <= 1250) {
      // $(".teamwrokfixed").css({ bottom: "43px" });
      $(".main-footer").css({ bottom: "13px" });
      $(".content").css("height", contentWrapperHeight - 100);
    } else {
      // $(".teamwrokfixed").css({ bottom: "30px" });
      $(".main-footer").css({ bottom: "0px" });
      $(".content").css("height", contentWrapperHeight - 90);
    }
   
  }
}



