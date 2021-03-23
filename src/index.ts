
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

    Esquare.style.position = 'absolute';
    Esquare.style.zIndex = '1000';

    const handleMove = (moveEV: MouseEvent) => {
        Esquare.style.left = moveEV.pageX + 'px';
        Esquare.style.top = moveEV.pageY + 'px';
    };

    document.addEventListener('mousemove', handleMove);

    Esquare.onmouseup = () => {
        document.removeEventListener('mousemove', handleMove);
        Esquare.onmouseup = null;
    };

});