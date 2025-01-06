import IconRun from '@/shared/assets/icons/run.svg';
import IconHead from '@/shared/assets/icons/head.svg';
import IconBody from '@/shared/assets/icons/body.svg';
import IconHanger from '@/shared/assets/icons/hanger.svg';

export const IS_SSR = typeof window === undefined;

export const GENERATE_CATEGORIES = [
  {
    label: 'Action',
    value: 'action',
    icon: <IconRun />,
    tags: [
      { label: 'Stand', value: 'stand' },
      { label: 'Sits', value: 'sits' },
      { label: 'Pose', value: 'pose' },
      { label: 'Dance', value: 'dance' },
      { label: 'Epic', value: 'epic' },
      { label: 'Fighting stance', value: 'fighting_stance' },
      { label: 'Praying', value: 'praying' },
      { label: 'Winner', value: 'winnner' },
    ],
  },
  {
    label: 'Head',
    value: 'head',
    icon: <IconHead />,
    tags: [
      { label: 'HeadStand', value: 'Headstand' },
      { label: 'HeadSits', value: 'Headsits' },
      { label: 'HeadPose', value: 'Headpose' },
      { label: 'HeadDance', value: 'Headdance' },
      { label: 'HeadEpic', value: 'Headepic' },
      { label: 'HeadFighting stance', value: 'Headfighting_stance' },
      { label: 'HeadPraying', value: 'Headpraying' },
      { label: 'HeadWinner', value: 'Headwinnner' },
    ],
  },
  {
    label: 'Body',
    value: 'body',
    icon: <IconBody />,
    tags: [
      { label: 'BodyStand', value: 'Bodystand' },
      { label: 'BodySits', value: 'Bodysits' },
      { label: 'BodyPose', value: 'Bodypose' },
      { label: 'BodyDance', value: 'Bodydance' },
      { label: 'BodyEpic', value: 'Bodyepic' },
      { label: 'BodyFighting stance', value: 'Bodyfighting_stance' },
      { label: 'BodyPraying', value: 'Bodypraying' },
      { label: 'BodyWinner', value: 'Bodywinnner' },
    ],
  },
  {
    label: 'Style',
    value: 'style',
    icon: <IconHanger />,
    tags: [
      { label: 'StyleStand', value: 'Stylestand' },
      { label: 'StyleSits', value: 'Stylesits' },
      { label: 'StylePose', value: 'Stylepose' },
      { label: 'StyleDance', value: 'Styledance' },
      { label: 'StyleEpic', value: 'Styleepic' },
      { label: 'StyleFighting stance', value: 'Stylefighting_stance' },
      { label: 'StylePraying', value: 'Stylepraying' },
      { label: 'StyleWinner', value: 'Stylewinnner' },
    ],
  },
];
