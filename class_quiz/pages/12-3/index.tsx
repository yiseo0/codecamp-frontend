import ReactPlayer from 'react-player'
export default function YoutubePage() {

   return (
      <>
         <ReactPlayer width={800} height={600} muted={true} playing={true} url='https://youtu.be/UF0JiR3oTH8' />
      </>
   );
}