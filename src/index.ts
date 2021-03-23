
import './styles/reset.css';
import './styles/centerBody.css';

const DOMBody = <HTMLBodyElement>document.querySelector('body');

console.log(DOMBody);

const Esquare = document.createElement('div');

Esquare.style.height = '20px';
Esquare.style.width = '20px';
Esquare.style.background = 'black';

DOMBody.appendChild(Esquare);

Esquare.addEventListener('mousedown', mdEV => {

    const shiftX = mdEV.clientX - Esquare.getBoundingClientRect().left;
    const shiftY = mdEV.clientY - Esquare.getBoundingClientRect().top;

    Esquare.style.position = 'absolute';
    Esquare.style.zIndex = '1000';

    const handleMove = (moveEV: MouseEvent) => {
        Esquare.style.left = (moveEV.clientX - shiftX) + 'px';
        Esquare.style.top = (moveEV.clientY - shiftY) + 'px';

    };

    document.addEventListener('mousemove', handleMove);

    document.onmouseup = () => {
        document.removeEventListener('mousemove', handleMove);
        document.onmouseup = null;
    };

});