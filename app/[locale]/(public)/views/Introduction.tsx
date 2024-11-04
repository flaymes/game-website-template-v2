import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

// 游戏介绍
export default async function Introduction() {
  const t = await getTranslations('Introdaction');
  return (
    <>
      <h1 className="text-2xl md:text-5xl font-bold text-left mb-8 text-yellow-300 font-leckerli">{t('gameTitle')}</h1>

      <div className="flex flex-row mb-8 items-center">
        <section className="flex-grow pr-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-teal-300 font-leckerli">{t('whatIsTitle')}</h2>
          <p className="text-gray-200">{t('whatIsDescription')}</p>
        </section>
        <div className="flex-shrink-0 w-1/3">
          <Image
            src="/game_screenshot.webp"
            alt="Game screenshot"
            width={580}
            height={370}
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-yellow-300 font-leckerli">{t('howToPlayTitle')}</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>{t('howToPlayStep1')}</li>
          <li>{t('howToPlayStep2')}</li>
          <li>{t('howToPlayStep3')}</li>
        </ul>
      </section>
    </>
  );
}
