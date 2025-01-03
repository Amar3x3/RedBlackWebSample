
import ImageSlider from '../ImageSlider/ImageSlider'
import ImageSlider3D from '../ImageSlider3d/ImageSlider3d'
import './stack.css'

const Stack = () =>{

    const images = [
        'https://res.cloudinary.com/dn07sxmaf/image/upload/v1735194235/3DPortfolio/dragon_10_piavgo.jpg',
        'https://res.cloudinary.com/dn07sxmaf/image/upload/v1735194235/3DPortfolio/dragon_10_piavgo.jpg',
        'https://res.cloudinary.com/dn07sxmaf/image/upload/v1735194235/3DPortfolio/dragon_10_piavgo.jpg',
        'https://res.cloudinary.com/dn07sxmaf/image/upload/v1735194235/3DPortfolio/dragon_10_piavgo.jpg',
        'https://res.cloudinary.com/dn07sxmaf/image/upload/v1735194235/3DPortfolio/dragon_10_piavgo.jpg',
        'https://res.cloudinary.com/dn07sxmaf/image/upload/v1735194235/3DPortfolio/dragon_10_piavgo.jpg',
        'https://res.cloudinary.com/dn07sxmaf/image/upload/v1735194235/3DPortfolio/dragon_10_piavgo.jpg',
        'https://res.cloudinary.com/dn07sxmaf/image/upload/v1735194235/3DPortfolio/dragon_10_piavgo.jpg',
        'https://res.cloudinary.com/dn07sxmaf/image/upload/v1735194235/3DPortfolio/dragon_10_piavgo.jpg',
        'https://res.cloudinary.com/dn07sxmaf/image/upload/v1735194235/3DPortfolio/dragon_10_piavgo.jpg'
      ];
    return <>
         <div class="container ">
        <div id="cards">
            <div class="card" id="card1">

                <div class="card-body">
                  <ImageSlider/>
                </div>
            </div>
            <li class="card" id="card2">
                <div class="card-body">
                <ImageSlider/>
                   
                </div>
            </li>
            <li class="card" id="card3">
                <div class="card-body">
                <ImageSlider/>
                    
                </div>
            </li>
            <li class="card" id="card4">
                <div class="card-body">
                <ImageSlider/>
                    
                </div>
            </li>
        </div>
    </div>
    </>
}
export default Stack