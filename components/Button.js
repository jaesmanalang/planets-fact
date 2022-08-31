import classNames from 'classnames';
import { useAppContext } from '../context/state';

export default function Button({ num, title, isMobile }) {
  const { currentInfo, changeInfo, currentPlanet } = useAppContext();
  const intNum = parseInt(num);

  const handleClick = () => {
    changeInfo(intNum);
  };

  if (isMobile) {
    return (
      <button
        className={classNames(
          'uppercase tracking-[2px] font-bold opacity-50 text-[9px] h-full relative px-1 before:absolute before:left-0 before:right-0 before:bottom-0 before:h-[4px]',
          {
            ' before:bg-mercury opacity-100':
              intNum === currentInfo.num && currentPlanet?.name === 'Mercury',
            ' before:bg-venus opacity-100':
              intNum === currentInfo.num && currentPlanet?.name === 'Venus',
            ' before:bg-earth opacity-100':
              intNum === currentInfo.num && currentPlanet?.name === 'Earth',
            ' before:bg-mars opacity-100':
              intNum === currentInfo.num && currentPlanet?.name === 'Mars',
            ' before:bg-jupiter opacity-100':
              intNum === currentInfo.num && currentPlanet?.name === 'Jupiter',
            ' before:bg-saturn opacity-100':
              intNum === currentInfo.num && currentPlanet?.name === 'Saturn',
            ' before:bg-uranus opacity-100':
              intNum === currentInfo.num && currentPlanet?.name === 'Uranus',
            ' before:bg-neptune opacity-100':
              intNum === currentInfo.num && currentPlanet?.name === 'Neptune',
          }
        )}
        onClick={handleClick}
      >
        {title}
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={classNames(
        'px-7 py-3 tracking-widest uppercase text-white text-xs w-full flex items-center font-bold border border-slate-500',
        {
          'bg-mercury border-mercury':
            intNum === currentInfo.num && currentPlanet.name === 'Mercury',
          'bg-venus border-venus':
            intNum === currentInfo.num && currentPlanet.name === 'Venus',
          'bg-earth border-earth':
            intNum === currentInfo.num && currentPlanet.name === 'Earth',
          'bg-mars border-mars':
            intNum === currentInfo.num && currentPlanet.name === 'Mars',
          'bg-jupiter border-jupiter':
            intNum === currentInfo.num && currentPlanet.name === 'Jupiter',
          'bg-saturn border-saturn':
            intNum === currentInfo.num && currentPlanet.name === 'Saturn',
          'bg-uranus border-uranus':
            intNum === currentInfo.num && currentPlanet.name === 'Uranus',
          'bg-neptune border-neptune':
            intNum === currentInfo.num && currentPlanet.name === 'Neptune',
        }
      )}
    >
      <span className="opacity-50">{num < 10 ? `0${num}` : num}</span>
      <span className="ml-7">{title}</span>
    </button>
  );
}
