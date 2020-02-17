import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'changetheme';

  ngOnInit() {
    var st = document.getElementById('themeCSS') as HTMLLinkElement;
    if (localStorage.getItem('theme')) {
      st.href = localStorage.getItem('theme');
    }
  }

  changeTheme() {
    var st = document.getElementById('themeCSS') as HTMLLinkElement;

    if (st.href.endsWith('dark-theme.css')) {
      st.href = 'light-theme.css';
    } else {
      st.href = 'dark-theme.css';
    }

    localStorage.setItem('theme', st.href);

  }
}
