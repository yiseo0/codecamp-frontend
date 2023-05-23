import { Carousel } from 'antd';
const contentStyle: React.CSSProperties = {
   margin: 0,
   height: '160px',
   color: '#fff',
   lineHeight: '160px',
   textAlign: 'center',
   background: '#364d79',
};
export default function SimpleSlider() {
   const onChange = (currentSlide: number) => {
      console.log(currentSlide);
   };
   ;
   return (
      <Carousel afterChange={onChange} style={{ width: '300px' }}>
         <div>
            <h3 style={contentStyle}>1</h3>
         </div>
         <div>
            <h3 style={contentStyle}>2</h3>
         </div>
         <div>
            <h3 style={contentStyle}>3</h3>
         </div>
         <div>
            <h3 style={contentStyle}>4</h3>
         </div>
      </Carousel>
   );
}