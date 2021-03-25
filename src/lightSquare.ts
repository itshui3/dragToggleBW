
export const buildLightSquare = () => {
    const LSquare = document.createElement('div');

    LSquare.className = 'lightSquare';

    const topRow = document.createElement('div');
    topRow.className = 'light_row';

    const bottomRow = document.createElement('div');
    bottomRow.className = 'light_row';

    const topLeftSquare = document.createElement('div');
    topLeftSquare.className = 'cornerSquare';
    topLeftSquare.style.top = '0';
    topLeftSquare.style.left = '0';

    const topRightSquare = document.createElement('div');
    topRightSquare.className = 'cornerSquare';
    topRightSquare.style.top = '0';
    topRightSquare.style.right = '0';

    const bottomLeftSquare = document.createElement('div');
    bottomLeftSquare.className = 'cornerSquare';
    bottomLeftSquare.style.bottom = '0';
    bottomLeftSquare.style.left = '0';

    const bottomRightSquare = document.createElement('div');
    bottomRightSquare.className = 'cornerSquare';
    bottomRightSquare.style.bottom = '0';
    bottomRightSquare.style.right = '0';

    topRow.appendChild(topLeftSquare)
    topRow.appendChild(topRightSquare)

    bottomRow.appendChild(bottomLeftSquare)
    bottomRow.appendChild(bottomRightSquare)

    LSquare.appendChild(topRow);
    LSquare.appendChild(bottomRow);

    return LSquare;

}