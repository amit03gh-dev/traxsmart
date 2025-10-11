
'use client';

import { HeroContentItem } from '@/types/home';
import MagicCursor from '../common/MagicCursor';
import HeroSlider from '../common/HeroSlider';


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
    <HeroSlider data={data.content}/>
    </>
  );
}
