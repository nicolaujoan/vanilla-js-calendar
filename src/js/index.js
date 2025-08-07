import '../css/global.css';
import '../scss/global.scss';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('#main');
  const counter = main.querySelector('#counter');

  main.addEventListener('click', (event) => {
    const { id, type } = event.target;

    if (type === 'button') {
      const currentCount = Number(counter.textContent);

      switch (id) {
        case 'increment': {
          counter.textContent = currentCount + 1;
          break;
        }
        case 'decrement': {
          counter.textContent = currentCount - 1;
          break;
        }
      }
    }
  });

  let calendarEl = document.getElementById('calendar');
let calendar = new Calendar(calendarEl, {
  plugins: [ dayGridPlugin, timeGridPlugin, listPlugin ],
  initialView: 'dayGridMonth',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,listWeek'
  }
});
calendar.render();

});
