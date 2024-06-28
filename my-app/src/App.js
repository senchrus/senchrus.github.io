
import './App.css';




function App() {
  let date = new Date().toJSON().slice(0,10)
  return (
  <div className='w-full h-full absolute flex items-center justify-center flex-col bg-[#FFFACD]'>
    <p className='p-10'>ШАПКА</p>
  <div className='flex flex-col items-center justify-center bg-white w-[1000px] h-full relative'>
  <p className='text-3xl mb-10'>Форма бронирования</p>
  <label>
    Фамилия *
  </label>
  <input type='text' required className='border-2 w-1/3 invalid:border-red-500 valid:border-gray-500'pattern='[А-Яа-яё\s]*$' minLength={2}></input> 
  <label>Имя *</label>
  <input type='text' required className='border-2 w-1/3 invalid:border-red-500 valid:border-gray-500 ' pattern='[А-Яа-яё\s]*$' minLength={2} ></input>
  <label>Отчество *</label>
  <input type='text' required className='border-2 w-1/3 invalid:border-red-500 valid:border-gray-500' pattern='[А-Яа-яё\s]*$' minLength={2} ></input>
  <label>Номер *</label>
  <input type='text' required className='border-2 w-1/3 invalid:border-red-500 valid:border-gray-500' pattern='^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$' minLength={10} ></input>
  <label>Дата</label> 
  <input type='date' required className='border-2 w-1/3 invalid:border-red-500 valid:border-gray-500 ' min={date} ></input>
  <label>Время</label>
  <select required className='border-2 w-1/3 invalid:border-red-500 valid:border-gray-500'>
    <option>12:00</option>
    <option>13:00</option>
    <option>14:00</option>
    <option>15:00</option>
    <option>16:00</option>
    <option>17:00</option>
    <option>18:00</option>
    <option>19:00</option> 
  </select>
  <p>* - поле является обязательным</p>
  <button className='bg-green-500 border-2 w-1/3 mt-10 mb-10'>Забронировать</button>
  </div>
  <div className='flex flex-col justify-start items-center bg-[#AFEEEE] w-full h-full gap-10'>
    <p className='mt-5 text-xl'>Контакты</p>
    <div className='flex gap-10 text-3xl'>
    <p>Номер</p>
    <p>Адрес</p>
    <p>Время работы</p>
    </div>
    <p className='flex mt-24 text-3xl'>ЛОГО</p>
  </div>
  </div>
  )
}

export default App;
