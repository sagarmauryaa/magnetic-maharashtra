import AutoplayVideo from '@/components/common/AutoplayVideo';
import './index.scss';
const HeroBanner = () => {
  return (
    <section className='ui-heroBanner' observer-animation="cssClass" observer-animation-classes="animateImagesIn" observer-animation-repeat="true">
      <div className="ui-heroBanner__wrapper">
        <AutoplayVideo 
          wrapperClass="ui-heroBanner__video-wrapper" 
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          fetchPriority="high"
          desktopSrc={"https://ik.imagekit.io/bn4qs1mj3/DesktopHeroVideoHQ.mp4?updatedAt=1744977909415"}
          mobileSrc={"/videos/MobileHeroVideo.mp4"}
        />
        <div className='ui-heroBanner__content'>
          <h1 className='ui-heroBanner__heading' observer-animation="title">
            Magnetic Maharashtra
            is your hub for
            growth, with endless opportunities, smart policies, and dedicated
            support to ensure your success. Here, your ambitions can truly take
            flight.
          </h1>
        </div>
      </div>
      <span className="anim-line -bottom" observer-animation="cssClass" observer-animation-classes="animateSingleLineIn" transform-origin="top left"></span>
    </section>
  )
}

export default HeroBanner