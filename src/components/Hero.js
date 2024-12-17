export default function Hero({children, imgSrc}) {
  return ( 
    <>
    <div className={`relative hero-container md:h-screen`}
    style={{
      background: 'rgb(0,0,0)',     
      backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.4) 30%, rgba(0, 0, 0, 0.2) 50%,  rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0.95) 100%), url('${imgSrc}')`,
      width:'100%',
        backgroundPosition:'center',
        backgroundSize:'cover',
    }}
    >
        <div className="hero w-full text-center absolute pl-3" style={{
            top: '100%',
            left: '50%',
            msTransform: 'translate(-50%, -100%)',
            transform: 'translate(-50%, -100%)',
        }}> 
        {children}
        </div>
    </div>
    </>
  );
}