import Gym from '../../Assests/Gym.jpg'
import fitness from '../../Assests/Fitness.jpg'
import Fit from '../../Assests/Fit2.jpg'
import Fit3 from '../../Assests/Fit3.jpg'
import SecondaryHeader from "../SecondaryHeader"

import './About.css'
const About=()=>{

    return(
       <> 
        <SecondaryHeader title= 'About us' image={Fit}> 
        At Vawlines fitness, our mission is to inspire and empower individuals to achieve their optimal health and fitness potential. We are dedicated to providing a supportive community, expert guidance, and innovative fitness solutions that cater to all levels and lifestyles.
        </SecondaryHeader>
        <section className='About-story'> 
<div className='about about-container'> 
<div className='img images-container'>
<img src= {Fit3}/>
</div>
<div className='about about-content'>
    <h1> Our story</h1>
    <p>The Beginning
Founded in 2020, Vawlines started as a small local gym with a big dream—to create a space where people of all backgrounds and fitness levels could come together to achieve their health goals. Our founder, Huda, was driven by a personal transformation journey and a desire to share the life-changing benefits of fitness with others.

Growing Community
As word spread about our unique approach to fitness, our community began to grow. We expanded our services to include a variety of group classes, personal training, and wellness workshops. Our members appreciated the personalized attention and supportive environment, which helped them stay motivated and committed to their fitness goals.

Innovation and Expansion
Recognizing the need to reach more people, we embraced technology and launched our comprehensive fitness app. This allowed us to offer virtual training, online classes, and a wealth of resources to anyone, anywhere. Our app became a game-changer, providing the flexibility and convenience that modern lifestyles demand.
</p>
</div>
</div>
<div className='about about-container2'> 
<div className=' about-content2'>
    <h1> Our Vision</h1>
    <p> Our vision is to become a leading global fitness community renowned for transforming lives through personalized, effective, and innovative fitness solutions. We aspire to foster a culture of health and wellness that extends beyond our members, positively impacting the broader community and contributing to a healthier world.</p>
    </div>
    <div className='img images-container2'>
<img src= {Fit}/>
</div>
</div>
<div className='about about-container3'> 

<div className='img images-container3'>
<img src= {fitness}/>
</div>
<div className=' about-content3'>
    <h1> Our Goal</h1>
    <p> Promote Healthy Living:
Encourage and facilitate a lifestyle that prioritizes physical and mental well-being through regular exercise and balanced nutrition.

Deliver Personalized Fitness Solutions:
Offer tailored fitness programs and services that meet the unique needs and goals of each individual, ensuring effective and sustainable results.

Build a Supportive Community:
Create a welcoming and inclusive environment where members can connect, support, and motivate each other to reach their fitness aspirations.

Innovate and Evolve:
Continuously improve and expand our offerings by integrating the latest fitness trends, technologies, and research to provide the best possible experience for our members.</p>
    </div>
       </div>
        </section>
        </>
    )
}

export default About