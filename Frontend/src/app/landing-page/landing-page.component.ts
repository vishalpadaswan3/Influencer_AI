import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {


  token = localStorage.getItem('token');
  Generate(): void {
    if (this.token) {
      fetch('http://localhost:5000/tokenhelp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: this.token }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.message === 'success') {
            window.location.href = 'http://localhost:5000/generate';
          } else {
            window.location.href = '/login';
          }
        })
        .catch((err) => console.log(err));


      fetch('http://localhost:5000/tokenhelp1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: this.token }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.message === 'success') {
            window.location.href = 'http://localhost:5000/generate';
          } else {
            window.location.href = '/login';
          }
        })

    } else {
      window.location.href = '/login';
    }
  }

  check(): string {
    if (this.token) {
      return "none";
    } else {
      return "block";
    }
  }

  Logout(): string {
    if (this.token) {
      return "block";
    } else {
      return "none";
    }
  }

  logouthere(): void {
    localStorage.removeItem('token');
    window.location.href = '/';
  }


  ngOnInit(): void {
    $(document).ready(() => {
      let scroll = $(window).scrollTop();
      let width = $(window).width();

      // Toggle nav links on click
      $('.fa-bars').click(function () {
        $('.nav-links').slideToggle(3000);
      });

      // Handle scroll and window width changes
      $(window).scroll(() => {
        scroll = $(window).scrollTop();
        width = $(window).width();

        // Add type-checking for scroll and width
        if (scroll !== undefined && width !== undefined) {
          if (scroll >= 70 && width >= 995) {
            $('nav').addClass('new-nav');
            $('nav ul li a').css({ color: 'black' });
            $('.nav-heading span').css({ color: 'black' });
            $('.nav-heading span>i').css({ color: '#F85A40' });
            $('.fa-moon').css({ color: 'black' });
            $('#dog').css({ color: 'black' });
          } else if (scroll === 0 && width >= 995) {
            $('nav').removeClass('new-nav');
            $('nav ul li a').css({ color: '#fff' });
            $('.nav-heading span>i').css({ color: '#fff' });
            $('.nav-heading span').css({ color: 'white' });
            $('.fa-moon').css({ color: '#fff' });
            $('#dog').css({ color: 'black' });
          } else if (scroll >= 70 && width < 995) {
            $('.nav-heading span').css({ color: 'black' });
            $('nav').addClass('new-nav');
            $('.nav-heading span').addClass('black');
            $('.nav-heading span>i').css({ color: '#F85A40' });
            $('.fa-moon').css({ color: 'black' });
            $('#dog').css({ color: 'black' });
          } else if (scroll === 0 && width < 995) {
            $('nav').removeClass('new-nav');
            $('.nav-heading span').css({ color: 'white' });
            $('.nav-heading span').removeClass('black');
            $('.fa-moon').css({ color: 'white' });
            $('.nav-links>span>i').css({ color: '#fff' });
            $('#dog').css({ color: 'black' });
          }
        }
      });

      // Toggle dark mode
      const x = document.querySelector('.night');
      x?.addEventListener('click', () => {
        const y = document.querySelectorAll('.goblack');

        for (let i = 0; i < y.length; i += 1) {
          y[i].classList.toggle('dark-mode');
        }
      });
    });
  }
}
