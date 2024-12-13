export default function Hero({children, imgSrc}) {
  return ( 
    <>
    <div className="relative hero-container md:h-screen" 
    style={{backgroundImage:`linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0.75)), url('${imgSrc}')`,
        width:'100%',
        backgroundColor:"black",
        backgroundPosition:'center',
        backgroundSize:'cover',
    }}
    >
        <div className="hero w-full p-2 text-center absolute" style={{
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