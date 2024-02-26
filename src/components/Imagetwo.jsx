import { Parallax } from 'react-parallax';

import About from './About';
import img5 from '../Images/para.jpg'

const Imagetwo = () => (
    <Parallax className='image' bgImage={img5}    strength={200}>
        <About/>
    </Parallax>
);
export default Imagetwo