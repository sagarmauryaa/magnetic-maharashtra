import './index.scss';
const HeroBanner = () => {
  return (
    <section className='ui-heroBanner' observer-animation="cssClass" observer-animation-classes="animateImagesIn" observer-animation-repeat="true">
      <div className="ui-heroBanner__wrapper">
        <video
          className="ui-heroBanner__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          fetchPriority="high"
        >
          <source
            src="https://ik.imagekit.io/bn4qs1mj3/DesktopHeroVideoHQ.mp4?updatedAt=1744977909415"
            media="all and (min-width: 1024px)"
            type="video/mp4"
          />
          <source
            src="/videos/tablet.mp4"
            media="(min-width: 481px) and (max-width: 1023px)"
            type="video/mp4"
          />
          <source
            src="/videos/MobileHeroVideo.mp4"
            type="video/mp4"
            media="all and (max-width: 480px)"
          />
        </video>
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