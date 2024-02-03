import ImageIcon1 from '../assets/icon1.png';
import ImageIcon2 from '../assets/icon2.png';
import ImageIcon3 from '../assets/icon3.png';
import ImageIcon4 from '../assets/icon4.png';

function Gallery() {
    return (
        <>
            <img src={ImageIcon1} alt="icon-1-image" className='galleryIcon' />
            <img src={ImageIcon2} alt="icon-2-image" className='galleryIcon'/>
            <img src={ImageIcon3} alt="icon-3-image" className='galleryIcon'/>
            <img src={ImageIcon4} alt="icon-4-image" className='galleryIcon'/>
        </>
    )
}

export default Gallery;