import Timeline from 'react-calendar-timeline/lib'
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'

import './App.css';


const randDate = () => moment().add(Math.round(Math.random()*7)*-1, 'day')
const randDate1 = () => moment().add(Math.round(Math.random()*7), 'day')


const groups = [{ id: 1, title: 'Премиум', stackItems:false }, 
{id:11, title: 'Audi Q5 (У123ЕН125'},
{id:12, title: 'Audi Q6 (У145НЕ125'},
{id: 2, title: 'Комфорт' },  
{id:21, title: 'Toyota Corolla (У123ЕН125'},
{id:22, title: 'Toyota RAV4 (E543BM125)'},
{id: 3, title: 'ЭКОНОМ'},
{id:31, title: 'Lada Vesta (У173ЕН125'},
{id:32, title: 'Holda Logo (У135НЕ125'},
]

const items = [
  {
    id: 1,
    group: 11,
    title: <div style={{display:'flex',justifyContent: 'space-between'}}><span>10:00</span><span></span><span>Авдеев Михаил Васильевич</span>17:00</div>,
    start_time: randDate(),
    end_time: randDate1(),
  },  
  {
    id: 2,
    group: 12,
    title: <div style={{display:'flex',justifyContent: 'space-between'}}><span>10:00</span><span></span><span>Авдеев Михаил Васильевич</span>17:00</div>,
    start_time: randDate(),
    end_time: randDate1(),
  },  {
    id: 3,
    group: 21,
    title: <div style={{display:'flex',justifyContent: 'space-between'}}><span>10:00</span><span></span><span>Авдеев Михаил Васильевич</span>17:00</div>,
    start_time: randDate(),
    end_time: randDate1(),
  },  
  {
    id: 4,
    group: 22,
    title: <div style={{display:'flex',justifyContent: 'space-between'}}><span>10:00</span><span></span><span>Авдеев Михаил Васильевич</span>17:00</div>,
    start_time: randDate(),
    end_time: randDate1(),
  },  {
    id: 5,
    group: 31,
    title: <div style={{display:'flex',justifyContent: 'space-between'}}><span>10:00</span><span></span><span>Авдеев Михаил Васильевич</span>17:00</div>,
    start_time: randDate(),
    end_time: randDate1(),
  },  
  {
    id: 6,
    group: 32,
    title: <div style={{display:'flex',justifyContent: 'space-between'}}><span>10:00</span><span></span><span>Авдеев Михаил Васильевич</span>17:00</div>,
    start_time: randDate(),
    end_time: randDate1(),
  },
]








function App() {
  return (
    <div className="App">
    <Timeline
      groups={groups}
      items={items}
      defaultTimeStart={moment().add(-7, 'day')}
      defaultTimeEnd={moment().add(7, 'day')}
    />
    </div>
  );
}

export default App;



