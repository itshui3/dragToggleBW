
export const buildDragSquare = () => {
    const Esquare = document.createElement('div');

    Esquare.style.height = '20px';
    Esquare.style.width = '20px';
    Esquare.style.background = 'black';
    Esquare.style.position = 'absolute';

    Esquare.addEventListener('mousedown', mdEV => {

        const offsetX = mdEV.clientX - Esquare.getBoundingClientRect().left;
        const offsetY = mdEV.clientY - Esquare.getBoundingClientRect().top;

        Esquare.style.position = 'absolute';
        Esquare.style.zIndex = '1000';

        const handleMove = (moveEV: MouseEvent) => {
            Esquare.style.left = (moveEV.clientX - offsetX) + 'px';
            Esquare.style.top = (moveEV.clientY - offsetY) + 'px';
        };

        document.addEventListener('mousemove', handleMove);

        document.onmouseup = () => {
            document.removeEventListener('mousemove', handleMove);
            document.onmouseup = null;
        };

    });

    return Esquare;
}