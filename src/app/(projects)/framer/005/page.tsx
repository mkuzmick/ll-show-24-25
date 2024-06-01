import CenteredContainer from '@/components/elements/framer/CenteredContainer';

export default function Home() {
  return (
    <div>
       <CenteredContainer>
          <div style={{ color: 'white', textAlign: 'center' }}>
            <h1 className='font-black text-9xl text-amber-300 mix-blend-hard-light opacity-80 '>ll summer</h1>
            <p className='font-medium text-amber-300 mix-blend-hard-light opacity-80 '>scroll down to see all the things. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolor eum debitis quia sit, itaque temporibus, nobis laudantium non id aperiam ut eveniet alias eos hic ex sapiente nostrum iure?</p>
          </div>
        </CenteredContainer>
        <h1>links below</h1>
        <p>links links</p>
    </div>
   
  );
}