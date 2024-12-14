export default function Hero({children, imgSrc}) {
  return ( 
    <>
    <div className="relative hero-container md:h-screen" 
    style={{
      backgroundImage:`linear-gradient(to top, 
      rgba(0,0,0,0.9),
      rgba(0,0,0,0.3),
      rgba(0,0,0,0), 
      rgba(0,0,0,0.3), 
      rgba(0,0,0,0.9)
      
      ), url('${imgSrc}')`,
        width:'100%',
        backgroundColor:"black",
        backgroundPosition:'center',
        backgroundSize:'cover',
    }}
    >
        <div className="hero w-full text-center absolute" style={{
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