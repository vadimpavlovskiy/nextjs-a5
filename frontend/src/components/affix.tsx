import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Text, Transition } from '@mantine/core';
import { IconArrowUp } from '@tabler/icons-react';
import { motion } from 'framer-motion';


function AffixTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Affix className='rounded-full' position={{ bottom: 10, right: 20 }}>
        <Transition transition={'slide-up'} duration={400} exitDuration={400} timingFunction="linear" mounted={scroll.y>100 }>
          {(transitionStyles) => (
            <Button
              className='bg-light rounded-full h-14 w-14 duration-300'
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              <IconArrowUp size={24} />
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}

export default AffixTop;