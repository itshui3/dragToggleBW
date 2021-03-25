
import './styles/reset.css';
import './styles/centerBody.css';
import './styles/lightSquare.css';
// components
import { buildDragSquare } from './dragSquare';
import { buildLightSquare } from './lightSquare';

const DOMBody = <HTMLBodyElement>document.querySelector('body');

DOMBody.appendChild(buildDragSquare());
DOMBody.appendChild(buildLightSquare());