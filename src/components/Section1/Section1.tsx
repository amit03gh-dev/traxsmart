
'use client';

import { HeroContentItem } from '@/types/home';
import MagicCursor from '../common/MagicCursor';
import TX_HeroSlider from '../common/Slider/TX_HeroSlider';


type HeroData = {
  componentName: string;
  content: HeroContentItem[]
};

interface Props {
  data: HeroData
}

export default function Section1({data}:Props ) {
  return (
    <>
    <MagicCursor/>
    <TX_HeroSlider data={data.content}/>
    </>
  );
}
