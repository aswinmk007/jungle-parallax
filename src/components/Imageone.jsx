import { Parallax } from 'react-parallax';
import img1 from '../Images/jungle.jpg'
import Header from './Header';

const Imageone = () => (
    <Parallax className='image' bgImage={img1}  strength={200}>
        <Header/>
    </Parallax>
);
export default Imageone