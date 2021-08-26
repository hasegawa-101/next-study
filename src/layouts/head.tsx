import { VFC, useContext } from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';

type HeadPropsType = Omit<NextSeoProps, 'title' | 'description' | 'canonical'>;

export const Head: VFC<HeadPropsType> = () => {
  return <NextSeo />;
};
