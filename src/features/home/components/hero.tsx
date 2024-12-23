import Image from 'next/image';

import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { hero } from '@/features/home/constants/texts';

export function Hero() {
  return (
    <section className='py-16 md:py-32'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center justify-center gap-16 md:flex-row'>
          <div className='flex flex-col items-center text-center md:items-start md:text-start'>
            <span className='mb-2 text-pretty text-3xl font-bold'>{hero.title}</span>
            <p className='mb-4 text-pretty text-xl text-muted-foreground'>{hero.description}</p>
            <Button size='lg' className='w-fit'>
              {hero.action}
              <ArrowRight />
            </Button>
          </div>
          <div className='w-fit'>
            <Image src={hero.image.src} alt={hero.image.alt} width={400} height={400} className='mx-auto mb-4 rounded-lg' />
          </div>
        </div>
      </div>
    </section>
  );
}